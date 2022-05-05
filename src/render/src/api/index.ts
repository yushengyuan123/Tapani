import axios from "axios"
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'
import type {
  RequestConfig,
  RequestInterceptors
} from './types'
import {
  ElMessage
} from "element-plus"

class Request {
  instance: AxiosInstance
  interceptorsObj?: RequestInterceptors
  
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器')
        return res
      },
      (err: any) => {
        ElMessage.error(err)
      },
    )
    
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器')
        return res.data
      },
      (err: any) => {
        ElMessage.error(err)
      },
    )
  }
  
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res)
          }
          
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}

export default Request

