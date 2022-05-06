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
          <el-select v-model="activeProportion">
            <el-option
              v-for="item in screenProportion"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </function-form-item>
      </div>
    </div>
    <div class="media-setting-item-con">
      <h1 class="media-setting-title">快捷键</h1>
      <div class="key-board-item-area">
        <key-board-item />
        <Note>Keys Pressed</Note>
        <div class="flex mt-2 justify-center space-x-1 min-h-1.5em">
          <code
            v-for="key in keys"
            :key="key"
            class="font-mono"
          >
            {{ key }}
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref, unref, watchEffect
} from 'vue'
import FunctionFormItem from "@/components/FunctionFormItem/FunctionFormItem.vue"
import EqualizerAdjust from "@/components/Equalizer/EqualizerAdjust.vue";
import KeyBoardItem from "./KeyBoardItem.vue"
import {
  useMagicKeys,
  whenever
} from "@vueuse/core"

interface ScreenProportion {
  value: string | number,
  label: string
}

export default defineComponent({
  name: "media-setting",
  components: {
    [FunctionFormItem.name]: FunctionFormItem,
    [EqualizerAdjust.name]: EqualizerAdjust,
    [KeyBoardItem.name]: KeyBoardItem
  },
  setup() {
    let id = 0
    const screenProportion = ref<ScreenProportion[]>([
      {
        value: id++,
        label: '默认'
      },
      {
        value: id++,
        label: '4:3'
      },
      {
        value: id++,
        label: '16:9'
      },
    ])
    const activeProportion = unref(screenProportion)[0].value
    const { current } = useMagicKeys()

    const keys = computed(() => {
      console.log('案件发生变化', current)
      return Array.from(current)
    })

    watchEffect(() => {
      console.log(current)
    })

    whenever(() => {
      return current.has('a')
    }, () => {
      console.log(current)
    })

    return {
      screenProportion,
      activeProportion,
      keys
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
  padding: 10px 0;
}

</style>
