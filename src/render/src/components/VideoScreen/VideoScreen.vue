<template>
<!--  <el-upload-->
<!--    class="upload-demo"-->
<!--    :auto-upload="false"-->
<!--    :on-change="handleChange"-->
<!--    :on-preview="handlePreview"-->
<!--    :on-remove="handleRemove"-->
<!--    :show-file-list="true"-->
<!--  >-->
<!--    <el-button type="primary">Click to upload</el-button>-->
<!--    <template #tip>-->
<!--      <div class="el-upload__tip">-->
<!--        jpg/png files with a size less than 500KB.-->
<!--      </div>-->
<!--    </template>-->
<!--  </el-upload>-->
  <video
    class="video-screen"
    ref="videoScreenRef"
    autoplay
  />
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue"
import {useMedia} from "./use-media";
import {useVideoInfo} from '../../store/videoInfo'
import {storeToRefs} from 'pinia'
import {UploadProps, UploadFile} from "element-plus";
import {useMediaControls} from "@vueuse/core"

export default defineComponent({
  name: "video-screen",
  setup() {
    const videoScreenRef = ref<HTMLVideoElement>()
    const { videoBlobAddress } = storeToRefs(useVideoInfo())

    useMedia(videoScreenRef)

    const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
      console.log(file, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      // console.log(uploadFile)
    }

    const handleChange: UploadProps['onChange'] = (
      uploadFile: UploadFile
    ) => {
      videoBlobAddress.value = URL.createObjectURL(uploadFile.raw)
    }

    return {
      videoScreenRef,
      handlePreview,
      handleRemove,
      handleChange,
    }
  }
})
</script>

<style scoped lang="less">
.video-screen {
  height: 100%;
  width: 100%;
}
</style>