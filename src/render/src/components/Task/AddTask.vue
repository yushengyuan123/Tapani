<template>
  <global-block
    v-if="visible"
  >
    <div class="add-task-con">
      <el-tabs v-model="active" @tab-change="handleTabChange">
        <el-tab-pane label="磁力链接" name="magnet">
          <div class="add-task-magnet-con">
            <ta-textarea
              v-model="magnetUri"
              :placeholder="'请输入磁力链接'" 
              class="add-task-magnet-textarea">
            </ta-textarea>
          </div>
        </el-tab-pane>
        <el-tab-pane label="种子任务" name="torrent">
          <div class="add-task-torrent-con">
            <ta-torrent-upload />                       
          </div>   
        </el-tab-pane>
      </el-tabs>
      <div class="add-task-form-con">
        <el-form 
          :model="formData" 
          label-width="90px"
          label-position="left"
        >
          <el-form-item label="重命名：">
            <el-input v-model="formData.fileName" />
          </el-form-item>
          <el-form-item label="存储路径：">
            <el-input v-model="formData.downloadDir" />
          </el-form-item>
        </el-form>
      </div>
      <div class="add-task-button-con">
        <div 
          class="add-task-button"
          @click="onCancel"
        >
          取消
        </div>
        <div class="add-task-button"
          @click="onSubmit"
        >
          确定
        </div>
      </div>          
    </div>
  </global-block>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref
} from 'vue'
import TextArea from "@/components/TextArea/TextArea.vue"
import GlobalBlock from "@/components/GlobalBlock/GlobalBlock.vue"
import TorrentUpload from './TorrentUpload.vue'
import { useParseTorrent } from '../../store/torrentFiles/torrent'

export interface addTaskFormData {
  fileName: string,
  downloadDir: string
}

export type TabLable = 'torrent' | 'magnet'

export default defineComponent({
  name: "add-task",
  props: {
    visible: {
      type: Boolean
    }
  },
  emits: ['update:visible', 'submit'],
  components: {
    [GlobalBlock.name]: GlobalBlock,
    [TextArea.name]: TextArea,
    [TorrentUpload.name]: TorrentUpload
  },
  setup(props, context) {
    let active: TabLable = 'magnet'
    const visible = true
    const formData = reactive<addTaskFormData>({
      fileName: '',
      downloadDir: ''
    })
    const magnetUri = ref('')

    const handleTabChange = (tab: any) => {
      active = tab
    }

    const onCancel = () => {
      context.emit('update:visible', false)   
    }

    const onSubmit = () => {
      const { getCurrentTorrent } = useParseTorrent()
      let payload

      if (active === "magnet") {
        payload = magnetUri.value
      } else {
        const file = getCurrentTorrent()
        if (file) {
          payload = file.path
        }
      }

      context.emit('submit', {
        magnet: payload,
        mode: active,
        ...formData
      })
      context.emit('update:visible', false)
    }

    return {
      magnetUri,
      formData,
      visible,
      active,
      handleTabChange,
      onCancel,
      onSubmit
    }
  }
})
</script>

<style scoped lang="less">
.add-task-con {
  width: 600px;
  background-color: #1f2427;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
}

.add-task-button {
  float: right;
  padding: 6px 24px;
  border-radius: 6px;
  text-align: center;
  margin: 0 10px;
  box-shadow: 0 0 0 0.2rem rgb(40 138 222 / 50%);
  font-weight: bold;
  cursor: pointer;
}

.add-task-magnet-con {
  margin-bottom: 10px;
}

.add-task-torrent-con {
  margin-bottom: 20px;
}

.add-task-form-con {
  width: 100%;
}

.add-task-magnet-textarea {
  width: 100%;
}
</style>
