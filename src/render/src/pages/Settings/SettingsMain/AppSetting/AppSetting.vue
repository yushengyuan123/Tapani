<template>
  <div class="setting-main-con">
    <div class="setting-main-top-con">
      <el-row>
        <el-col :span="12">
          <div class="setting-main-app-icon-update-con">
            <div class="setting-main-icon-con">
              <div class="setting-main-icon-logo">
                <img src="@/asserts/appLogo-setting.png" alt="">
              </div>
              <h1 class="setting-main-app-name">
                Tapani
              </h1>
              <div class="setting-main-version">1.0.0</div>
            </div>
            <div class="setting-main-check-update">
              <icon-button
                :text="$t('app_setting.app_module.check_update')"
                :img-src="getImgSrc('update')"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <base-info />
        </el-col>
      </el-row>
    </div>
    <el-container id="container">
      <function-setting />
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import BaseInfo from "./BaseInfo.vue"
import FunctionSetting from "./FunctionSetting.vue"
import Button from "./Button.vue"
import { getImgSrc  } from '@/utils'

export default defineComponent({
  name: "app-settings",
  components: {
    [BaseInfo.name]: BaseInfo,
    [FunctionSetting.name]: FunctionSetting,
    [Button.name]: Button
  },
  setup() {
    return {
      getImgSrc
    }
  }
})
</script>

<style scoped lang="less">
.setting-main-icon-logo {
  @size: 60px;
  height: @size;
  width: @size;

  img {
    @size: 55px;
    height: @size;
    width: @size;
  }
}
.setting-main-top-con {
  margin-bottom: 30px;
}
.setting-main-check-update-button {
  height: 22px;
  width: 85px;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  cursor: pointer;

  .setting-main-check-update-text {
    line-height: 22px;
    padding-left: 8px;
  }

  .setting-main-check-update-img {
    img {
      @size: 20px;
      height: @size;
      width: @size;
    }
  }
}
.setting-main-app-name {
  font-family: Monaco;
  font-size: 32px;
  font-weight: normal;
  margin: 0;
}
.setting-main-version {
  font-size: 13px;
}
.setting-main-check-update-button {
  margin-top: 16px;
}
</style>
