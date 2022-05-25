<template>
  <div v-if="!hasParse">
    <el-upload
      class="ta-upload-torrent"
      drag
      :limit="1"
      :multiple="false"
      accept=".torrent"
      :on-change="handleChange"
      :auto-upload="false"
      :show-file-list="false"
    >
      <img src="@/asserts/bt.png" alt="">
      <div class="el-upload__text">
        将种子文件拖到此处，或者点击选择
      </div>
    </el-upload>       
  </div>
  <ta-torrent-files
    :files="files"
    v-else 
  /> 
</template>

<script lang="ts">
import {
  defineComponent, ref, Ref, toRaw, unref
} from 'vue'
import TorrentFiles, { TorrentFilesProps } from './TorrentFiles.vue'
import { listTorrentFiles } from '../../utils'
import { useParseTorrent } from '../../store/torrentFiles/torrent'
const parseTorrent = require('parse-torrent')

import type { UploadFile } from 'element-plus'

export default defineComponent({
  name: "ta-torrent-upload",
  components: {
    [TorrentFiles.name]: TorrentFiles
  },
  setup() {
    const hasParse = ref(false)
    const { setParseTorrent, setCurrentTorrent } = useParseTorrent()
    const files: Ref<TorrentFilesProps[]> = ref([] as TorrentFilesProps[])

    const handleChange = (uploadFile: UploadFile) => {
      const fileRaw = uploadFile.raw
      
      // todo 他有可能选择到一个null的吗？
      setCurrentTorrent(fileRaw as File)

      if (fileRaw) {
        parseTorrent.remote(fileRaw, (err: Error, parsedTorrent: any) => {
          if (err) {
            throw err
          }         
          hasParse.value = true
          console.log('[Tapani] parsed torrent: ', parsedTorrent)
          if (parsedTorrent?.files) {
            files.value = listTorrentFiles(parsedTorrent.files)
            setParseTorrent(unref(files))
          }
        })
      } else {
        console.error('选择文件为null')
      }

    }

    return {
      files,
      hasParse,
      handleChange
    }
  }
})
</script>

<style scoped lang="less">
.ta-upload-torrent {
  width: 100%;

  img {
    @size: 50px;
    height: @size;
    width: @size;
  }

  :deep(.el-upload) {
    width: 100%;
  }

  :deep(.el-upload-dragger) {
    width: 100%;
  }
  
  :deep(.el-upload-dragger) {
    border-radius: 4px;
    padding: 24px;
    height: auto;
  }
  :deep(.upload-inbox-icon) {
    display: inline-block;
    margin-bottom: 12px;
  }
  :deep(.torrent-name) {
    margin-top: 4px;
    line-height: 16px;
  }
}
</style>
