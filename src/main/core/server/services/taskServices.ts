import { DownloadManager } from '../../webtorrent/lib/downloadManager'
import { DownloadReq } from '~/share/api/task'

export type DownloadFileOptions = Pick<DownloadReq, 'magnet'>

export function downloadFile(options: DownloadFileOptions) {
  const downloadManager = new DownloadManager()

  downloadManager.add(options.magnet)
}