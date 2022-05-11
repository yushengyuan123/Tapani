<template>
  <div class="equalizer-adjust-page-equalizer">
    <div class="equalizer-adjust-page-equalizer-title-con">
      <div class="equalizer-adjust-page-equalizer-title-text">
        {{$t('app_setting.media_module.screen.equalizer_title')}}
      </div>
    </div>
    <div>
      <equalizer-adjust-item
        :label="$t('app_setting.media_module.screen.light')"
        :img-src="getImgSrc('light')"
      />
      <equalizer-adjust-item
        :label="$t('app_setting.media_module.screen.contrast')"
        :img-src="getImgSrc('compareRatio')"
      />
      <equalizer-adjust-item
        :label="$t('app_setting.media_module.screen.saturation')"
        :img-src="getImgSrc('fullRatio')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide
} from 'vue'
import { getImgSrc } from '../../utils'
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

    return {
      getImgSrc
    }
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
