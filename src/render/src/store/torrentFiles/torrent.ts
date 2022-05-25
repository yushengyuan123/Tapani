import { defineStore } from "pinia"
import { ref } from "vue"

import type { TorrentFilesProps } from '../../components/Task/TorrentFiles.vue'

export const useParseTorrent = defineStore('torrent-files', () => {
  const parseTorrent = ref<TorrentFilesProps[]>()
  let currentTorrent: File | null = null

  const getParseTorrent = () => {
    return parseTorrent.value
  }

  const getCurrentTorrent = () => currentTorrent

  const setParseTorrent = (value: TorrentFilesProps[]) => {
    parseTorrent.value = value
  }

  const setCurrentTorrent = (value: File) => {
    currentTorrent = value
  }

  return {
    getParseTorrent,
    getCurrentTorrent,
    setParseTorrent,
    setCurrentTorrent
  }
})
