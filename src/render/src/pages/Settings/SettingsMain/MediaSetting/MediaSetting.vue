<template>
  <div class="media-setting-con">
    <div class="media-setting-item-con">
      <h1 class="media-setting-title">媒体设置</h1>
      <equalizer-adjust />
      <div>
        <function-form-item
          :title="'画面比例'"
          :desc="'调整屏幕长、宽比'"
        >
          <select-dropdown
            v-model="activeValue"
            :menu="screenProportionOption"
            @select-change="updateProportion"
          />
        </function-form-item>
      </div>
    </div>
    <div class="media-setting-item-con">
      <h1 class="media-setting-title">快捷键</h1>
      <div class="key-board-item-area">
        <template
          v-for="item in keyBoardSetItem"
          :key="item.operate"
        >
          <key-board-item
            :operate="item.operate"
            :text="item.text"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref, toRaw, unref, watchEffect
} from 'vue'
import {
  storeToRefs
} from 'pinia'
import WindowUtils from '../../../../api/window'
import FunctionFormItem from "@/components/FunctionFormItem/FunctionFormItem.vue"
import EqualizerAdjust from "@/components/Equalizer/EqualizerAdjust.vue"
import SelectDropDownVue from '@/components/SelectDropDown/SelectDropDown.vue'
import {
  useScreenControl
} from '../../../../store/screenControl'
import KeyBoardItem from "./KeyBoardItem.vue"
import type {
  OperatorKeyTypes
} from "../../../../store/keyboard"

interface ScreenProportion {
  value: string | number,
  label: string
}

interface KeyBoardSetItem {
  operate: OperatorKeyTypes,
  text: string
}

export default defineComponent({
  name: "media-setting",
  components: {
    [FunctionFormItem.name]: FunctionFormItem,
    [EqualizerAdjust.name]: EqualizerAdjust,
    [KeyBoardItem.name]: KeyBoardItem,
    [SelectDropDownVue.name]: SelectDropDownVue
  },
  setup() {
    const screenStroe = useScreenControl()
    const { 
      screenProportionOption,
      updateAspectRatio ,
      getRatioCount
    } = screenStroe
    const { screenProportion } = storeToRefs(screenStroe)
    const activeValue = screenProportion
    const keyBoardSetItem = ref<KeyBoardSetItem[]>([
      {
        operate: "full-screen",
        text: '全屏（full-screen）'
      },
      {
        operate: "zoom-in",
        text: '放大（zoom-in）'
      }
    ])
    
    const updateProportion = (index: number) => {
      const windowUtils = new WindowUtils()
      const ratio = screenProportionOption[index].value
      
      windowUtils.windowResizable(getRatioCount(ratio))
    
      updateAspectRatio(ratio)
    }

    return {
      activeValue,
      screenProportion,
      screenProportionOption,
      // activeProportion,
      keyBoardSetItem,
      updateProportion
    }
  }
})
</script>

<style scoped lang="less">
.media-setting-title {
  height: 30px;
  font-size: 25px;
  font-weight: lighter;
  margin-bottom: 15px;
}

.media-setting-item-con {
  margin-bottom: 30px;
}

.key-board-item-area {
  width: 100%;
}
</style>
