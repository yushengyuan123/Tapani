import {
  IpcRendererEvent
} from "electron"

export type IpcRendererListener<R = any> = (event: IpcRendererEvent, ...args: R[]) => void;

export enum TypesTimes {
  DURATION = 'DURATION',
  CURRENT = 'CURRENT'
}

export interface SelectArrItem {
  name: string,
  imgSrc: string,
  routerName: string,
  fileAttr?: Boolean
}
