<template>
  <div class="download-content-con">
    <div class="download-content-inner-con">
      <content-item />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import ContentItem from './ContentItem/ContentItem.vue'

export default defineComponent({
  name: "download-content",
  components: {
    [ContentItem.name]: ContentItem
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.download-content-con {
  height: 100%;
  width: 100%;
  padding: 40px 20%;
  box-sizing: border-box;
}

.download-content-inner-con {
  height: 100%;
  width: 100%;
}
</style>
