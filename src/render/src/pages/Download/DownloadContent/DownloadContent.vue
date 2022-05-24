<template>
  <div class="download-content-con">
    <div v-if="isRender" class="download-content-inner-con">
      <content-item
        :details="itemInfo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  reactive
} from 'vue'
import ContentItem from './ContentItem/ContentItem.vue'
import { WebSocketClient } from '../../../api/webtorrent/lib/websocket'

export interface DownloadMessage {
  name: string,
  progress: number,
  status: boolean,
  size: number
}

export default defineComponent({
  name: "download-content",
  components: {
    [ContentItem.name]: ContentItem
  },
  setup() {
    const ws = new WebSocketClient()
    const isRender = ref(false)
    const itemInfo = reactive({
      name: '',
      size: 1,
      status: false,
      progress: 0
    })

    ws.on('input', (message: DownloadMessage) => {
      if (!isRender.value) {
        isRender.value = true
      } 

      itemInfo.name = message.name
      itemInfo.size = message.size
      itemInfo.status = message.status
      itemInfo.progress = message.progress

      console.log(itemInfo);
      
    })

    onMounted(() => {
      ws.open()
    })

    return {
      isRender,
      itemInfo
    }
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
