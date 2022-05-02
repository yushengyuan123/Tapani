import {
  IpcRendererEvent
} from "electron"

export type IpcRendererListener<R = any> = (event: IpcRendererEvent, ...args: R[]) => void;

export interface SelectArrItem {
  name: string,
  imgSrc: string,
}