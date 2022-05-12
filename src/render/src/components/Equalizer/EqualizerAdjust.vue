<template>
  <div class="equalizer-adjust-page-equalizer">
    <div class="equalizer-adjust-page-equalizer-title-con">
      <div class="equalizer-adjust-page-equalizer-title-text">
        {{$t('app_setting.media_module.screen.equalizer_title')}}
      </div>
      <div 
        class="equalizer-adjust-page-equalizer-refresh-img"
        @click="resetFilter"
      >
        <img src="@/asserts/refresh.png">
      </div>
    </div>
    <div>
      <template 
        v-for="(item, index) in itemList"
        :key="index"
      >
        <equalizer-adjust-item
          :id="item.id"
          :label="item.label"
          :img-src="getImgSrc(item.img)"
          @value-update="updateValue"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide
} from 'vue'
import { useI18n } from 'vue-i18n'
import { getImgSrc } from '../../utils'
import { useScreenControl, FilterStyleKey } from '../../store/screenControl'
import EqualizerAdjustItem from "./EqualizerAdjustItem.vue"


function countPercent(value: number) {

}

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
    const { t } = useI18n()
    const { updateFilterStyle } = useScreenControl()
     const itemList = [
      {
        id: 'brightness',
        label: t('app_setting.media_module.screen.light'),
        img: 'light'
      },
      {
        id: 'contrast',
        label: t('app_setting.media_module.screen.contrast'),
        img: 'compareRatio'
      },
      {
        id: 'saturate',
        label: t('app_setting.media_module.screen.saturation'),
        img: 'fullRatio'
      },
    ]

    provide('labelWidth', props.labelWidth)
    provide('progressWidth', props.progressWidth)

    const resetFilter = () =>{
      updateFilterStyle("brightness", 100)

      updateFilterStyle("contrast", 100)

      updateFilterStyle("saturate", 100)
    }

    const updateValue = (data: any) => {
      // 限定在0 - 200之间移动，起点为100
      const percentage = Math.floor((data.value - 0.5) * 100) + 100
      const label: FilterStyleKey = data.label  

      updateFilterStyle(label, percentage)
    }

    return {
      itemList,
      getImgSrc,
      updateValue,
      resetFilter
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

.equalizer-adjust-page-equalizer-title-text {
  display: flex;
  align-items: center;
}

.equalizer-adjust-page-equalizer-refresh-img {
  flex: 1;
  float: right;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 05px;
  cursor: pointer;
  img {
    @size: 15px;
    height: @size;
    width: @size;
  }
}
</style>
