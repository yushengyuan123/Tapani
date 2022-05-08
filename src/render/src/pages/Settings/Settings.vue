<template>
  <div class="settings-con">
    <div class="settings-aside">
      <el-container id="container">
        <el-aside width="78px">
          <menu-index/>
        </el-aside>
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
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import AsideBar from "@/components/SetAside/AsideBar.vue"
import MenuIndex from "@/components/Menu/MenuIndex.vue"

export default defineComponent({
  name: "settings",
  components: {
    AsideBar,
    [AsideBar.name]: AsideBar,
    [MenuIndex.name]: MenuIndex,
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
  max-width: 600px;
  padding-top: 10px;
  box-sizing: border-box;
}
</style>
