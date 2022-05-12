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
        :percentage="countProgressPercentage"
        :width="progressWidth"
        :stroke-color="'#615d5d'"
        @change="progressChange"
      />
    </div>
    <div class="equalizer-adjust-progress-value">
      {{ labalValue }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  inject, PropType, provide, SetupContext
} from 'vue'
import { useScreenControl, FilterStyleKey } from '../../store/screenControl'
import Progress from "@/components/VideoControls/Progress.vue"

function formatRange(value: number) {  
  return ~~((value - 100) / 10)
}

function formatProgress(value: number) {
  return (value - 100) / 100 + 0.5
}

export default defineComponent({
  name: "equalizer-adjust-item",
  props: {
    id: {
      type: String as PropType<FilterStyleKey>,
      default: ''
    },
    label: {
      type: String
    },
    imgSrc: {
      type: String
    }
  },
  emits: ['value-update'],
  components: {
    [Progress.name]: Progress
  },
  setup(props, context: SetupContext) {
    const label = props.label
    const imgSrc = props.imgSrc
    const { getFilterValue } = useScreenControl()

    const labelWidth = inject('labelWidth')
    const progressWidth = inject('progressWidth')

    const labelStyle: CSSProperties = {
      minWidth: labelWidth + 'px'
    }

    const labalValue = computed(() => {
      return formatRange(getFilterValue(props.id))
    })

    const countProgressPercentage = computed(() => {
      return formatProgress(getFilterValue(props.id))
    }) 
    
    const progressChange = (value: number) => {
      context.emit('value-update', {
        value: value,
        label: props.id
      })
    }

    return {
      label,
      imgSrc,
      labelStyle,
      progressWidth,
      labalValue,
      progressChange,
      countProgressPercentage
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

.equalizer-adjust-progress-value {
  min-width: 30px;
  box-sizing: border-box;
  font-size: 12px;
  padding: 0 5px;
  text-align: right;
}
</style>
