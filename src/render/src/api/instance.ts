import Request from './index'
import {
  RequestConfig
} from "./types"

const baseURL = 'http://localhost:7001'

const request = new Request({
  baseURL: baseURL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => {
      console.log('实例请求拦截器')
      return config
    },
    // 响应拦截器
    responseInterceptors: result => {
      console.log('实例响应拦截器')
      return result
    },
  }
})

interface fetchRequestConfig<T> extends RequestConfig {
  data?: T
}

interface fetchResponse<T> {
  code: number,
  message: string,
  data: T
}

type IsBlob<T> = T extends Blob ? Blob : fetchResponse<T>

const fetch = <D, T = any>(config: fetchRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method.toLocaleLowerCase() === 'get') {
    config.params = config.data
  }
  return request.request<IsBlob<T>>(config)
}

export default fetch
