<template>
  <el-upload
    class="upload-demo"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :show-file-list="true"
    :on-change="onChange"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>

  <video ref="videoPlay" autoplay controls class="video-player" :src="videoBlobAddress" />

</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from "vue"

import type {
  UploadProps,
  UploadUserFile,
  UploadFile
} from 'element-plus'

export default defineComponent({
  name: "video-upload",
  setup() {
    const videoBlobAddress = ref<string>()
    const videoPlay = ref<HTMLVideoElement>()
    const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
      console.log(file, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      // console.log(uploadFile)
    }

    const onChange = (uploadFile: UploadFile) => {
      console.log(uploadFile)
      const videoBlob = URL.createObjectURL(uploadFile.raw)
      console.log(videoBlob)
      videoBlobAddress.value = videoBlob
      // console.log(videoPlay.value)
      // setInterval(() => {
      //   console.log(videoPlay.value.currentTime)
      // }, 1000)
    }

    return {
      videoBlobAddress,
      videoPlay,
      handleRemove,
      handlePreview,
      onChange
    }
  }
})
</script>

<style scoped lang="less">
.video-player {
  height: 400px;
  width: 400px;
  background-color: red;
}
</style>