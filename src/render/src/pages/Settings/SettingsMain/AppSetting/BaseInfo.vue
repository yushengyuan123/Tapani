<template>
  <div class="base-info-con">
    <div
      v-for="(item, index) in baseArr"
      :key="index"
      class="base-info-item-con"
    >
      <div class="base-info-item-aside">
        <div class="base-info-item-icon-con">
          <img :src="`src/asserts/${item.img}.png`" alt="">
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

interface BaseInfo {
  name: string,
  desc: string,
  img: string
}

export default defineComponent({
  name: "base-info",
  setup() {
    const baseArr: BaseInfo[] = ref([
      {
        name: '报告问题',
        desc: '生成一个预填写的Github问题',
        img: 'question-feedback'
      },
      {
        name: 'Github',
        desc: '源码',
        img: 'github'
      }
    ])
    return {
      baseArr
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
