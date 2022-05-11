<template>
  <div class="video-screen-setting-con">
    <div class="video-screen-setting-screen-proportion-con">
      <div class="video-screen-setting-screen-proportion">
        {{$t('video.video_setting.screen.proportion')}}
      </div>
      <div class="video-screen-setting-screen-dropdown">
        <select-dropdown
          v-model="activeValue"
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
import {
  ProportionStringTypes
} from '../../../pages/useSystemStorage'
import SelectDropDownVue from '@/components/SelectDropDown/SelectDropDown.vue'
import WindowUtils from '../../../api/window'
import EqualizerAdjust from "../../../components/Equalizer/EqualizerAdjust.vue"
import SelectDropDown from "@/components/SelectDropDown/SelectDropDown.vue"
import {
  AspectRatio
} from "~/share"

interface menuAspectRatio {
  value: ProportionStringTypes,
  count: AspectRatio
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
      screenProportion,
      getRatioCount 
    } = useScreenControl()
    const activeValue = screenProportion
    const menuArr: menuAspectRatio[] = [
      {
        value: ProportionStringTypes.Default,
        count: 16 / 9
      },
      {
        value: ProportionStringTypes.SixteenToNine,
        count: 16 / 9 
      },
      {
        value: ProportionStringTypes.FourToThree,
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
      activeValue,
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
