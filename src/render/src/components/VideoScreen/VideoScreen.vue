<template>
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

    const full = () => {
      videoScreenRef.value!.requestFullscreen()
    }

    const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
      console.log(file, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      // console.log(uploadFile)
    }

    const handleChange: UploadProps['onChange'] = (
      uploadFile: UploadFile
    ) => {
      console.log(uploadFile.raw)
      videoBlobAddress.value = URL.createObjectURL(uploadFile.raw)
    }

    return {
      videoScreenRef,
      full,
      handlePreview,
      handleRemove,
      handleChange,
    }
  }
})
</script>

<style scoped lang="less">
.video-screen {
  object-fit: fill;
  height: 100%;
  width: 100%;
}
</style>
