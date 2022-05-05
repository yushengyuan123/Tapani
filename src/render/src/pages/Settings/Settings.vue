<template>
  <div class="settings-con">
    <div class="settings-aside">
      <el-container id="container">
        <el-aside width="200px">
          <aside-bar />
        </el-aside>
        <el-container id="container">
          <div class="setting-main">
            <el-main>
              <router-view />
            </el-main>
          </div>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import AsideBar from "@/components/SetDialog/AsideBar.vue"

export default defineComponent({
  name: "settings",
  components: {
    AsideBar,
    [AsideBar.name]: AsideBar
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.settings-con {
  width: 100%;
}

.settings-aside {
  height: 100%;
  width: 100%;
}

.setting-main {
  height: 100%;
  width: 100%;
}
</style>
