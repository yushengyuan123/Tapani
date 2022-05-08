<template>
  <div class="equalizer-adjust-con">
    <div
      class="equalizer-adjust-aside"
      :style="labelStyle"
    >
      <div class="equalizer-adjust-aside-con">
        <img :src="imgSrc" alt="">
      </div>
      <div class="equalizer-adjust-aside-text">
        {{ label }}
      </div>
    </div>
    <div class="equalizer-adjust-progress">
      <video-progress
        :percentage="0"
        :width="progressWidth"
        :stroke-color="'#615d5d'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  CSSProperties,
  defineComponent,
  inject, provide
} from 'vue'
import Progress from "@/components/VideoControls/Progress.vue"

export default defineComponent({
  name: "equalizer-adjust-item",
  props: {
    label: {
      type: String
    },
    imgSrc: {
      type: String
    }
  },
  components: {
    [Progress.name]: Progress
  },
  setup(props) {
    const label = props.label
    const imgSrc = props.imgSrc

    const labelWidth = inject('labelWidth')
    const progressWidth = inject('progressWidth')

    const labelStyle: CSSProperties = {
      width: labelWidth + 'px'
    }
    // consoe.log(11)
    return {
      label,
      imgSrc,
      labelStyle,
      progressWidth
    }
  }
})
</script>

<style scoped lang="less">
.equalizer-adjust-con {
  display: flex;
  padding: 10px 0;
}

.equalizer-adjust-aside {
  width: 100px;
  display: flex;
  align-items: center;
}

.equalizer-adjust-aside-con {
  display: flex;
  align-items: center;
  margin-right: 5px;
  img {
    @size: 20px;
    height: @size;
    width: @size;
  }
}

.equalizer-adjust-aside-text {
  font-size: 14px;
}

.equalizer-adjust-progress {
  display: flex;
  align-items: center;
}
</style>
