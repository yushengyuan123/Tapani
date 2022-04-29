<template>
  <div>
    <video-control-area
      @visibleMenu="visibleMenu"
      @visibleSettings="visibleSettings"
    />
    <menu-index />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from "vue"
import Controls from "@/components/VideoPlayer/Controls.vue"
import MenuIndex from '@/components/Menu/MenuIndex.vue'

export default defineComponent({
  name: "video-player",
  components: {
    [Controls.name]: Controls,
    [MenuIndex.name]: MenuIndex
  },
  setup() {
    const visibleMenu = () => {
      console.log(111)
    }

    const visibleSettings = () => {
      console.log(222)
    }

    return {
      visibleMenu,
      visibleSettings
    }
  }
})
</script>

<style scoped>

</style>