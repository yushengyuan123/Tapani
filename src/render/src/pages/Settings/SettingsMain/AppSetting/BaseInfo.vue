<template>
  <div class="base-info-con">
    <div
      v-for="(item, index) in baseArr"
      :key="index"
      class="base-info-item-con"
      @click="clickEvent(index)"
    >
      <div class="base-info-item-aside">
        <div class="base-info-item-icon-con">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="base-info-item-details">
        <div class="base-info-item-title">
          {{ item.name }}
        </div>
        <div class="base-info-item-desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref
} from 'vue'
import { useIpcRenderer } from '@vueuse/electron'
import { useI18n } from 'vue-i18n'
import { getImgSrc } from '../../../../utils'

interface BaseInfo {
  name: string,
  desc: string,
  img: string
}

export default defineComponent({
  name: "base-info",
  setup() {
    const { t } = useI18n()
    const ipcRenderer = useIpcRenderer()
    const baseArr: BaseInfo[] = ref([
      {
        name: t('app_setting.app_module.issue'),
        desc: t('app_setting.app_module.issue_desc'),
        img: getImgSrc('question-feedback')
      },
      {
        name: 'Github',
        desc: t('app_setting.app_module.github'),
        img: getImgSrc('github')
      }
    ])

    const clickEvent = (index: number) => {
      let url: string = 'https://github.com/yushengyuan123/video-player-desktop'

      if (index === 0) {
        url += '/issues'
      }

      ipcRenderer.send('openGithub', url)
    }

    return {
      baseArr,
      clickEvent
    }
  }
})
</script>

<style scoped lang="less">
.base-info-item-con {
  display: flex;
  padding: 13px 16px;
  font-size: 14px;
  cursor: pointer;

  .base-info-item-desc {
    font-size: 12px;
  }

  .base-info-item-aside {
    flex: 1;
  }

  .base-info-item-details {
    width: 95%;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .base-info-item-icon-con {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      @size: 20px;
      height: @size;
      width: @size;
    }
  }
}
</style>
