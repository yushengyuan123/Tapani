<template>
  <div class="ta-torrent-files-con">
    <div class="ta-torrent-files-table-wrapper">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column 
          prop="name" 
          label="文件名" 
          width="200" 
          show-overflow-tooltip
        />
        <el-table-column 
          prop="extension" 
          label="扩展名" 
          width="80" 
        />
        <el-table-column prop="length" label="大小" width="85"/>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, PropType, ref
} from 'vue'

import type { TorrentFilesList } from '../../utils'

export interface TorrentFilesProps extends TorrentFilesList {

}

export default defineComponent({
  name: "ta-torrent-files",
  props: {
    files: {
      type: Array as PropType<TorrentFilesProps[]>
    }
  },
  setup(props) {
    const tableData = props.files

    onMounted(() => {
      console.log(tableData);
    })

    return {
      tableData
    }
  }
})
</script>

<style scoped lang="less">
.ta-torrent-files-con {
  height: 200px;
  width: 100%;
}
</style>
