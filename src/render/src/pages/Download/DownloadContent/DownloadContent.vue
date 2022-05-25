<template>
  <div class="download-content-con">
    <div v-if="isRender" class="download-content-inner-con">
      <content-item
        v-for="(item, index) in itemInfo"
        :key="index"
        :details="item"
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
import { CreateTaskMessage, MessageFormat, MessageTypes, UpdateInfo } from '~/share/api/websocketMessage'

export interface DownloadMessage {
  id: string,
  name: string,
  progress: number,
  status: boolean,
  size: number
}

const uidToIndex = new Map<string, number>()

export default defineComponent({
  name: "download-content",
  components: {
    [ContentItem.name]: ContentItem
  },
  setup() {
    const ws = new WebSocketClient()
    const isRender = ref(false)
    const itemInfo = ref<DownloadMessage[]>([])

    const createTask = (list: CreateTaskMessage) => {
      itemInfo.value = []
      
      list.forEach((item, index) => {
        uidToIndex.set(item.id, index)

        itemInfo.value.push({
          id: item.id,
          name: item.name,
          progress: 0,
          status: true,
          size: item.length
        })
      })
    }

    const updateProgress = (data: UpdateInfo) => {
      console.log('进度更新', data);
      
      const index = uidToIndex.get(data.id) as number
      itemInfo.value[index].progress
    }

    const receiveMessage = (message: MessageFormat) => {
      if (!isRender.value) {
        isRender.value = true
      }

      if (message.types === MessageTypes.CREATE) {        
        createTask(message.data as CreateTaskMessage)
      } else {
        updateProgress(message.data as UpdateInfo)
      }
    }

    ws.on('input', receiveMessage)

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
