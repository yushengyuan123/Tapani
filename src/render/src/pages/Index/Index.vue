<template>
  <div class="video-index-select-con">
    <div class="video-index-select-inner">
      <div class="video-index-select-inner-logo-con">
        <img src="@/asserts/appLogo.png" alt="">
      </div>
      <div class="video-index-select-inner-logo-desc">
        <h1>Vue Player</h1>
      </div>
      <div class="video-index-select-inner-app-desc">
        {{ $t("app_index.app_desc") }}
      </div>
      <div class="video-index-select-inner-version-con">
        <div class="video-index-select-inner-version-text">
          v1.0.0
        </div>
      </div>
        <div class="video-index-select-inner-con">
          <el-row justify="center">
            <template v-for="(item, index) in itemArr" :key="index">
              <select-item
                :item-text="item.name"
                :img-src="item.imgSrc"
                :is-file="item?.fileAttr"
                @file-select="moveToPlayerPages(index)"
              />
            </template>
          </el-row>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SelectItem from "./SelectItem/SelectItem.vue"
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SelectArrItem } from "../../../types"
import { getImgSrc } from "../../utils"

export default defineComponent({
  name: "app-index",
  components: {
    [SelectItem.name]: SelectItem,
  },
  setup() {
    const router = useRouter()
    const { t } = useI18n()
    const itemArr: SelectArrItem[] = [
      {
        name: t('app_index.select_item_file'),
        imgSrc: getImgSrc('folder'),
        routerName: 'video-index',
        fileAttr: true
      },
      // }, {
      //   name: '打开文件夹',
      //   imgSrc: '@/asserts/folder.png',
      // }, {
      //   name: '打开URL',
      //   imgSrc: '@/asserts/url.png',
      // },
      {
        name: t('app_index.select_item_setting'),
        imgSrc: getImgSrc('setting'),
        routerName: 'settings-index'
      }
    ]
    
    const moveToPlayerPages = (index: number) => {
      router.push({
        name: itemArr[index].routerName
      })
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
  background-color: #1a1a1a;
}

.video-index-select-inner-con {
  width: 100%;
  margin-top: 30px;
}

.video-index-select-inner-app-desc {
  font-size: 19px;
  margin-bottom: 20px;
}

.video-index-select-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.video-index-select-inner-logo-area {
  width: 100%;
}

.video-index-select-inner-logo-con {
  display: flex;
  justify-content: center;
  padding: 30px;
  img {
    @size: 200px;
    height: @size;
    width: @size;
  }
}

.video-index-select-inner-logo-desc {
  height: 60px;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 30px;
}

.video-index-select-inner-version-con {
  display: flex;
  justify-content: center;
}

.video-index-select-inner-version-text {
  font-size: 14px;
  background-color: #cdcd40;
  color: white;
  width: 50px;
  border-radius: 3px;
  text-align: center;
}
</style>
