<template>
  <div class="content-item-con">
    <div class="content-item-aside">
      <img src="@/asserts/bt.png" alt="">
    </div>
    <div class="content-item-details-outer-con">
      <div class="content-item-details">
        <div class="content-item-top-con">
          <div class="content-item-file-name">
            {{ name }}
          </div>
          <div class="content-item-file-info">
            <span class="content-item-file-size">{{ size }}</span>
            <span class="content-item-file-contain-file">(共1个文件)</span>
            <span class="content-item-file-status">{{ statusText }}</span>
          </div>
          <div class="content-item-file-download-progress">
            <el-progress
              stroke-width="3" 
              :percentage="percentage" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, toRefs, computed
} from 'vue'
import { DownloadMessage } from '../DownloadContent.vue'

export default defineComponent({
  name: "content-item",
  props: {
    details: {
      type: Object as PropType<DownloadMessage>
    }
  },
  setup(props) {
    const {
      name, 
      size, 
      status, 
      progress
    } = toRefs(props.details as DownloadMessage)

    const statusText = computed(() => {
      return status.value ? '下载中' : '已暂停'
    })

    const percentage = computed(() => {
      return progress.value * 100
    })

    return {
      name,
      size,
      statusText,
      percentage
    }
  }
})
</script>

<style scoped lang="less">
.content-item-con {
  display: flex;
  flex-direction: row;
  height: 80px;
  border-radius: 2px;
  overflow: hidden;
}

.content-item-aside {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;

  img {
    @size: 32px;
    height: @size;
    width: @size;
  }
}

.content-item-details-outer-con {
  flex: 1;
  height: 100%;
}

.content-item-details {
  height: 100%;
  width: 100%;
  padding: 15px 0 10px 0;
  box-sizing: border-box;
}

.content-item-top-con {
  height: 100%;
}

.content-item-file-info {
 
}

.content-item-file-name {
  font-size: 14px;
}

.content-item-file-size {
  font-size: 12px;
  margin-right: 10px;
}

.content-item-file-contain-file {
  font-size: 13px;
  margin-right: 20px;
}

.content-item-file-status {

  font-size: 12px;
}
</style>
