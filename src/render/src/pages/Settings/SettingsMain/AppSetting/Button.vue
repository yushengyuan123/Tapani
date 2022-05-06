<template>
  <div class="setting-main-check-update-button">
    <div class="setting-main-check-update-img">
      <img :src="buttonInfo.imgSrc" alt="">
    </div>
    <div class="setting-main-check-update-text">
      <span>{{ buttonInfo.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "icon-button",
  props: {
    text: {
      type: String
    },
    imgSrc: {
      type: String
    },
  },
  setup(props) {
    const buttonInfo = {
      text: props.text,
      imgSrc: props.imgSrc
    }

    return {
      buttonInfo
    }
  }
})
</script>

<style scoped lang="less">
.setting-main-check-update-button {
  height: 22px;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  cursor: pointer;

  .setting-main-check-update-text {
    line-height: 22px;
    padding-left: 8px;
  }

  .setting-main-check-update-img {
    display: flex;
    align-items: center;

    img {
      @size: 15px;
      height: @size;
      width: @size;
    }
  }
}
</style>
