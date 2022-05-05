<template>
  <div class="app-con">
    <el-container id="container">
      <el-aside width="78px">
        <menu-index />
      </el-aside>
      <router-view />
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VideoPlayer from './VideoPlayer/VideoPlayer.vue'
import Index from './Index/Index.vue'
import MenuIndex from "@/components/Menu/MenuIndex.vue";

export default defineComponent({
  name: "App",
  components: {
    VideoPlayer,
    [VideoPlayer.name]: VideoPlayer,
    [Index.name]: Index,
    [MenuIndex.name]: MenuIndex,
  },
})
</script>

<style scoped lang="less">
.app-con {
  height: 100%;
  width: 100%;
  background: transparent url('@/asserts/index-bg.png') top center no-repeat;
  background-size: cover;
}
</style>
