<template>
  <div
    class="video-progress-container"
    :style="progressContainerWidth"
  >
    <div class="video-progress-bar">
      <div class="video-progress-bar-outer">
        <div
          class="video-progress-bar-inner"
          ref="progressRef"
          :style="barStyle"
        >
          <div
            class="video-progress-bar-inner-draggable-area"
            ref="circlePointRef"
            :style="circlePointerStyle"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref, watch
} from "vue"
import {
  useProgress
} from "./use-progress"
import {
  useShrink
} from "@/hooks/use-shrink"
import type {
  CSSProperties
} from 'vue'

export default defineComponent({
  name: "video-progress",
  props: {
    percentage: {
      type: Number,
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    width: {
      type: Number,
      default: 350
    }
  },
  setup(props) {
    const defaultProgressWidth = props.width
    const curWidth = props.percentage * defaultProgressWidth
    const defaultCirclePointerSize = 8
    const strokeWidth = props.strokeWidth

    const progressContainerWidth = computed(
      (): CSSProperties => ({
        width: `${defaultProgressWidth}px`
      })
    )
    const circlePointerStyle = computed(
      (): CSSProperties => ({
        width: `${defaultCirclePointerSize}px`,
        height: `${defaultCirclePointerSize}px`,
        top: `-${(defaultCirclePointerSize - strokeWidth) / 2}px`
      })
    )
    const barStyle = computed(
      (): CSSProperties => ({
        width: `${curWidth}px`
      })
    )

    const circlePointRef = ref<HTMLElement>()
    const progressRef = ref<HTMLElement>()

    useShrink(progressRef, circlePointRef, [defaultCirclePointerSize, defaultProgressWidth])

    return {
      progressContainerWidth,
      circlePointerStyle,
      barStyle,
      circlePointRef,
      progressRef,
    }
  }
})
</script>

<style scoped lang="less">
.video-progress-container {
  height: 4px;
}

.video-progress-bar {
  height: 100%;
  width: 100%;

  .video-progress-bar-outer {
    height: 100%;
    width: 100%;
    border-radius: 100px;
  }

  .video-progress-bar-inner {
    position: relative;
    height: 100%;
    width: 70%;
    border-radius: 100px;

    .video-progress-bar-inner-draggable-area {
      position: absolute;
      right: 0;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}

</style>