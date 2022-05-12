<template>
  <video
    class="video-screen"
    ref="videoScreenRef"
    :style="videoFilterStyle"
    autoplay
  />
</template>

<script lang="ts">
import {computed, CSSProperties, defineComponent, Ref, ref, watch} from "vue"
import {useMedia} from "./use-media";
import {useVideoInfo} from '../../store/videoInfo'
import {storeToRefs} from 'pinia'
import {UploadProps, UploadFile} from "element-plus"
import { useScreenControl } from "../../store/screenControl"
import type { FilterControlOptions } from "../../store/screenControl"

function filterValue(filterStyle: Ref<FilterControlOptions>) {
  const brightness = filterStyle.value.brightness
  const contrast = filterStyle.value.contrast
  const saturate = filterStyle.value.saturate
  
  return `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`
}

export default defineComponent({
  name: "video-screen",
  setup() {
    const videoScreenRef = ref<HTMLVideoElement>()
    const { videoBlobAddress } = storeToRefs(useVideoInfo())
    const { filterStyle } = storeToRefs(useScreenControl())

    useMedia(videoScreenRef)

    const videoFilterStyle = computed(
      (): CSSProperties => {      
        return {
          filter: filterValue(filterStyle)
        }
      }     
    )

    const handleChange: UploadProps['onChange'] = (
      uploadFile: UploadFile
    ) => {
      videoBlobAddress.value = URL.createObjectURL(uploadFile.raw)
    }

    return {
      videoScreenRef,
      handleChange,
      videoFilterStyle
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
