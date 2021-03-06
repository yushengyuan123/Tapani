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
    method: "post",
    path: '/task/add',
    controller: TaskController.addTask
  }
]
