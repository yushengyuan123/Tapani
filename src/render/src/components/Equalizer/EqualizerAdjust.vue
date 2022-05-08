<template>
  <div class="equalizer-adjust-page-equalizer">
    <div class="equalizer-adjust-page-equalizer-title-con">
      <div class="equalizer-adjust-page-equalizer-title-text">画面均衡器</div>
    </div>
    <div>
      <equalizer-adjust-item
        :label="'亮度'"
        :img-src="'src/asserts/light.png'"
      />
      <equalizer-adjust-item
        :label="'对比度'"
        :img-src="'src/asserts/compareRatio.png'"
      />
      <equalizer-adjust-item
        :label="'饱和度'"
        :img-src="'src/asserts/fullRatio.png'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide
} from 'vue'
import EqualizerAdjustItem from "./EqualizerAdjustItem.vue"

export default defineComponent({
  name: "equalizer-adjust",
  props: {
    labelWidth: {
      type: Number,
      default: 100
    },
    progressWidth: {
      type: Number,
      default: 200
    }
  },
  components: {
    [EqualizerAdjustItem.name]: EqualizerAdjustItem,
  },
  setup(props) {
    provide('labelWidth', props.labelWidth)
    provide('progressWidth', props.progressWidth)

    return {}
  }
})
</script>

<style scoped lang="less">
.equalizer-adjust-page-equalizer {
  padding: 10px 0;
  .equalizer-adjust-page-equalizer-title-con {
    display: flex;
  }
}
</style>
