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

import type { addTaskFormData } from '../../components/Task/AddTask.vue'

export default defineComponent({
  name: "download-index",
  components: {
    [DownloadHeader.name]: DownloadHeader,
    [DownloadContent.name]: DownloadContent,
    [DownloadOperate.name]: DownloadOperate,
    [AddTask.name]: AddTask
  },
  setup() {
    // const magnetURI = 'magnet:?xt=urn:btih:3cea508c91bb81cde022559580ec7fc3262059fb&dn=%e9%98%b3%e5%85%89%e7%94%b5%e5%bd%b1www.ygdy8.com.%e6%b8%a9%e5%be%b7%e7%b1%b3%e5%b0%94%e5%84%bf%e7%ab%a5.2020.BD.1080P.%e4%b8%ad%e8%8b%b1%e5%8f%8c%e5%ad%97.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce'
    // const client = new WebTorrent()
    // console.log(os);
    
    // console.log(os.tmpdir());
    const visible = ref(false)

    // console.log(client);
    const visibleAddTask = () => {     
      visible.value = true
    }

    const submitTask = (
      form: addTaskFormData & { magnet: string }
    ) => {
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
