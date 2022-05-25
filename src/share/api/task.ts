export interface DownloadReq {
  fileName: string,
  downloadDir: string,
  magnet: string,
  mode: 'magnet' | 'torrent'
}