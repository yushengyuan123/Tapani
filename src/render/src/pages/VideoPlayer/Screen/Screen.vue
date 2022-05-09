<template>
  <div class="video-screen-setting-con">
    <div class="video-screen-setting-screen-proportion-con">
      <div class="video-screen-setting-screen-proportion">
        画面比例
      </div>
      <div class="video-screen-setting-screen-dropdown">
        <select-dropdown
          :menu="menuArr"
          @select-change="updateProportion"
        />
      </div>
    </div>
    <equalizer-adjust
      :label-width="85"
      :progress-width="120"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import {
  useScreenControl
} from "../../../store/screenControl"
import SelectDropDownVue from '@/components/SelectDropDown/SelectDropDown.vue'
import WindowUtils from '../../../api/window'
import EqualizerAdjust from "../../../components/Equalizer/EqualizerAdjust.vue"
import SelectDropDown from "@/components/SelectDropDown/SelectDropDown.vue"
import {
  AspectRatio
} from "~/share"

interface menuAspectRatio {
  value: AspectRatio,
  count: number
}

export default defineComponent({
  name: "Screen",
  components: {
    [EqualizerAdjust.name]: EqualizerAdjust,
    [SelectDropDown.name]: SelectDropDown,
    [SelectDropDownVue.name]: SelectDropDownVue
  },
  setup() {
    const { 
      updateAspectRatio, 
      screenProportionOption,
      getRatioCount 
    } = useScreenControl()
    const menuArr: menuAspectRatio[] = [
      {
        value: '默认',
        count: 16 / 9
      },
      {
        value: '16:9',
        count: 16 / 9 
      },
      {
        value: '4:3',
        count: 4 / 3 
      },
    ]

    const updateProportion = (index: number) => {
      const windowUtils = new WindowUtils()
      const ratio = menuArr[index].value
      
      windowUtils.windowResizable(getRatioCount(ratio))
    
      updateAspectRatio(ratio)
    }

    return {
      menuArr,
      updateProportion
    }
  }
})
</script>

<style scoped lang="less">
.video-screen-setting-screen-proportion-con {
  display: flex;
  width: 100%;
  padding: 5px 0;
}
.video-screen-setting-screen-proportion {
  width: 80px;
  font-size: 14px;
}
.video-screen-setting-screen-dropdown {
  flex: 1;
}
</style>
