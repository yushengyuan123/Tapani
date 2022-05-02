export enum Command {
  /* 仅在主进程才有的命令 */
  APPLICATION_OPEN_FILE = 'application:open-file',
  
  /* 渲染进程才有的命令 */
  VIDEO_LOCAL_SELECT= 'video:local-select',
}

export interface videoSelectArgs {
  basePath: string,
  buffer: Buffer
}