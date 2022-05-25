<template>
  <div class="download-index-con">
    <download-header />
    <download-content />
  </div>
  <download-operate
    @add-task="visibleAddTask"
  /> 
  <add-task 
    v-model:visible="visible"
    v-if="visible"
    @submit="submitTask"
  />   
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import DownloadHeader from "./DownloadHeader/DownloadHeader.vue"
import DownloadContent from "./DownloadContent/DownloadContent.vue"
import DownloadOperate from "./DownloadOperate/DownloadOperate.vue"
import AddTask from "@/components/Task/AddTask.vue"
import { taskApi } from "../../api/task"
// import WebTorrent from "webtorrent/webtorrent.min.js"
// const os = require('os')
// const WebTorrent = require('webtorrent')
import { WebSocketClient } from '../../api/webtorrent/lib/websocket'

import type { addTaskFormData, TabLable } from '../../components/Task/AddTask.vue'

interface SubmitEmits extends addTaskFormData{
  magnet: string,
  mode: TabLable
}

export default defineComponent({
  name: "download-index",
  components: {
    [DownloadHeader.name]: DownloadHeader,
    [DownloadContent.name]: DownloadContent,
    [DownloadOperate.name]: DownloadOperate,
    [AddTask.name]: AddTask
  },
  setup() {
    const visible = ref(true)

    const visibleAddTask = () => {     
      visible.value = true
    }

    const submitTask = (form: SubmitEmits) => {
      console.log('11231321');
      
      console.log(form);
      taskApi.downloadTask(form).then(res => {
        console.log(res);      
      })
      
    }
    
    return {
      visible,
      visibleAddTask,
      submitTask
    }
  }
})
</script>

<style scoped lang="less">
.download-index-con {
  height: 100%;
  width: 100%;
}
</style>
