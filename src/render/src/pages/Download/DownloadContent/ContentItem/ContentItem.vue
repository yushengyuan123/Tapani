<template>
  <div class="content-item-con">
    <div class="content-item-aside">
      <img src="@/asserts/bt.png" alt="">
    </div>
    <div class="content-item-details-outer-con">
      <div class="content-item-details">
        <div class="content-item-top-con">
          <div class="content-item-file-name">
            阳光电影www.ygdy8.com.神秘海域.2022.HD.1080P.中英双字。mkv
          </div>
          <div class="content-item-file-info">
            <span class="content-item-file-size">1.6GB</span>
            <span class="content-item-file-contain-file">(共1个文件)</span>
            <span class="content-item-file-status">已暂停</span>
          </div>
          <div class="content-item-file-download-progress">
            <el-progress
              stroke-width="3" 
              :percentage="50" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "content-item",
  setup() {
    return {}
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
