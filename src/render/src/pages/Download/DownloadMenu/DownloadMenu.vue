<template>
  <div class="download-menu-con">
    <div class="download-menu-item-con">
      <div 
        v-for="(item, index) in menu"
        :key="index"
        class="download-menu-item"
      >
        <div class="download-menu-item-icon">
          <img :src="item.img" alt="">
        </div>
        <div class="download-menu-item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { getImgSrc } from "../../../utils"

export default defineComponent({
  name: "download-menu",
  components: {
  
  },
  setup() {
    const menu = [
      {
        text: '下载',
        img: getImgSrc('download')
      },
      {
        text: '已完成',
        img: getImgSrc('download')
      },
    ]

    return {
      menu
    }
  }
})
</script>

<style scoped lang="less">
.download-menu-con {

}

.download-menu-item-con {
  display: flex;
  width: 500px;
}

.download-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
}

.download-menu-item-icon {
  height: 30px;
  width: 30px;
  margin-bottom: 5px;

  img {
    height: 100%;
    width: 100%;
  }
}

.download-menu-item-text {
  font-size: 12px;
}
</style>
