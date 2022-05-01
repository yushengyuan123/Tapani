<template>
  <div class="select-item-con">
    <div class="select-item-icon-con">
      <el-row align="middle" justify="center">
        <img :src="imgSrc" alt="">
      </el-row>
    </div>
    <div class="select-item-text">
      <span>{{itemText}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "select-item",
  props: {
    itemText: {
      type: String,
      default: '暂无'
    },
    imgSrc: {
      type: String
    }
  },
  setup(props) {
    const itemText = props.itemText
    const imgSrc = props.imgSrc

    return {
      itemText,
      imgSrc
    }
  }
})
</script>

<style scoped lang="less">
.select-item-con {
  @size: 100px;
  height: @size;
  width: @size;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;

  .select-item-icon-con {
    height: 60px;

    img {
      @size: 50px;
      height: @size;
      width: @size;
    }
  }

  .select-item-text {
    height: 20px;
    text-align: center;
    font-size: 14px;
  }
}
</style>