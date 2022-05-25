export enum MessageTypes {
  CREATE,
  UPDATE
}

export type CreateTaskMessage = CreateTaskInfo[]

export type Data<T extends MessageTypes> = T extends MessageTypes.CREATE ? CreateTaskMessage : UpdateInfo

export interface MessageFormat {
  types: MessageTypes,
  data: CreateTaskInfo[] | UpdateInfo
}

export interface CreateTaskInfo {
  id: string
  name: string,
  length: number,
  totalFilesLength: number,
  outputDir: string
}

export interface UpdateInfo {
  id: string,
  progress: number
}

export function generateMessage<T extends MessageTypes, R extends Data<T> >(
  types: T,
  data: R
) {
  return {
    types: types,
    data: data
  }
}