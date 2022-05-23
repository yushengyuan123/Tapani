import {
  TaskController
} from '../controllers'

type RequestMethods = 'get' | 'post'

export interface RoutesRecord {
  method: RequestMethods,
  path: string,
  controller: any
}

export const routes: RoutesRecord[] = [
  {
    method: "get",
    path: '/task/add',
    controller: TaskController.addTask
  }
]
