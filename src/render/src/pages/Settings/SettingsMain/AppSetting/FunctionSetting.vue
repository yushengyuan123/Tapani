<template>
  <div class="function-setting-con">
    <h1 class="function-setting-title">{{$t('app_setting.app_module.app_set_title')}}</h1>
    <div class="function-setting-form-con">
        <function-form-item
          :title="$t('app_setting.app_module.language')"
          :desc="$t('app_setting.app_module.language_desc')"
        >
          <select-dropdown
            v-model="activeValue"
            :menu="languageList"
            @select-change="dropdownSelect"
          />
        </function-form-item>
      <function-form-item
        :title="$t('app_setting.app_module.debugger')"
        :desc="$t('app_setting.app_module.debugger_desc')"
      >
        <icon-button
          :text="$t('app_setting.app_module.debugger_button_desc')"
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
import SelectDropDownVue from '@/components/SelectDropDown/SelectDropDown.vue'
import Button from "./Button.vue"
import { storeToRefs } from 'pinia'
import { useLanguage } from '../../../../store/language'

interface LanguageSelectOption {
  value: string,
}

export default defineComponent({
  name: "function-setting",
  components: {
    [FunctionFormItem.name]: FunctionFormItem,
    [Button.name]: Button,
    [SelectDropDownVue.name]: SelectDropDownVue
  },
  setup() {
    const languageStore = useLanguage()
    const { defaultLanguage } = storeToRefs(languageStore)
    const { updateDefaultLanguage, languageList } = languageStore
    const activeValue = defaultLanguage

    const dropdownSelect = (index: number) => {
      updateDefaultLanguage(languageList[index].value)

      location.reload()
    }
  
    return {
      languageList,
      activeValue,
      dropdownSelect
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
