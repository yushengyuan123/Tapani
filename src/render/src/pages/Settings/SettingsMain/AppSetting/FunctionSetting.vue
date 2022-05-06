<template>
  <div class="function-setting-con">
    <h1 class="function-setting-title">应用程序设置</h1>
    <div class="function-setting-form-con">
        <function-form-item
          :title="'语言'"
          :desc="'Help translate Tabby'"
        >
          <el-select v-model="activeLabel">
            <el-option
              v-for="item in languageOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </function-form-item>
      <function-form-item
        :title="'调试'"
        :desc="'打开chrome控制台(开发者选项)'"
      >
        <icon-button
          :text="'打开Devtools'"
          :img-src="'src/asserts/debug.png'"
        />
      </function-form-item>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, toRaw, unref
} from 'vue'
import FunctionFormItem from "@/components/FunctionFormItem/FunctionFormItem.vue"
import Button from "./Button.vue"

interface LanguageSelectOption {
  value: string,
  label: string
}

export default defineComponent({
  name: "function-setting",
  components: {
    [FunctionFormItem.name]: FunctionFormItem,
    [Button.name]: Button,
  },
  setup(props) {
    let optionsId = 1
    const languageOptions = ref<LanguageSelectOption[]>([
      {
        value: (optionsId++).toString(),
        label: 'English'
      },
      {
        value: (optionsId++).toString(),
        label: '中文(简体)'
      },
      {
        value: (optionsId++).toString(),
        label: '中文(繁体)'
      },
    ])
    const activeLabel = ref(unref(languageOptions)[0].label)

    return {
      languageOptions,
      activeLabel
    }
  }
})
</script>

<style scoped lang="less">
.function-setting-con {
  width: 100%;
}

.function-setting-title {
  font-size: 23px;
  font-weight: lighter;
  margin-bottom: 10px;
}
</style>
