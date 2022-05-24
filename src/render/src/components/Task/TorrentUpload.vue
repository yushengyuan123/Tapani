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
</template>

<script lang="ts">
import {
  defineComponent, ref
} from 'vue'
import { listTorrentFiles } from '../../utils'
const parseTorrent = require('parse-torrent')

import type { UploadFile } from 'element-plus'

export default defineComponent({
  name: "ta-torrent-upload",
  setup() {
    const hasParse = ref(false)

    const handleChange = (uploadFile: UploadFile) => {
      const fileRaw = uploadFile.raw

      if (fileRaw) {
        parseTorrent.remote(fileRaw, (err: Error, parsedTorrent: any) => {
          if (err) {
            throw err
          }         
          hasParse.value = true
          console.log('[Tapani] parsed torrent: ', parsedTorrent)
          if (parsedTorrent?.files) {
            const files = listTorrentFiles(parsedTorrent.files)
            console.log(files);
          }
        })
      } else {
        console.error('选择文件为null')
      }

    }

    return {
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

  :deep(.el-upload, .el-upload-dragger) {
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
