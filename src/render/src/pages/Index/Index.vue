<template>
  <div class="video-index-select-con">
    <el-row align="middle" justify="center">
      <div class="video-index-select-inner-con">
        <el-row align="middle" justify="center">
          <template v-for="(item, index) in itemArr" :key="index">
            <select-item
              :item-text="item.name"
              :img-src="item.imgSrc"
              @file-select="moveToPlayerPages(index)"
            />
          </template>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from "vue"
import SelectItem from "./SelectItem/SelectItem.vue"
import { useRouter } from 'vue-router'
import { SelectArrItem } from "~/types"
import {ElMessage} from "element-plus";

export default defineComponent({
  name: "app-index",
  components: {
    [SelectItem.name]: SelectItem,
  },
  setup() {
    const itemArr: SelectArrItem[] = [{
      name: '打开文件',
      imgSrc: 'src/asserts/file.png',
    }, {
      name: '打开文件夹',
      imgSrc: 'src/asserts/folder.png',
    }, {
      name: '打开URL',
      imgSrc: 'src/asserts/url.png',
    }]
    const router = useRouter()

    const moveToPlayerPages = (index) => {
      if (index > 0) {
        ElMessage.warning('该功能暂未开放')
      } else {
        router.push({
          name: 'video-index'
        })
      }
    }

    return {
      itemArr,
      moveToPlayerPages
    }
  }
})
</script>

<style scoped lang="less">
.video-index-select-con {
  height: 100%;
  width: 100%;
}

.video-index-select-inner-con {
  height: 100%;
  width: 100%;
}
</style>
