<template>
  <div class="un-open-con">
    <div class="un-open-content">
      <div class="un-open-content-img">
        <img src="@/asserts/unopen.png" alt="">
      </div>
      <p class="un-open-content-text">
        {{$t("not_open.title")}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "un-open",
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.un-open-con {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 200px;
  box-sizing: border-box;
}

.un-open-content {
  .un-open-content-img {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  img {
    @size: 100px;
    height: @size;
    width: @size;
  }

  p {
    text-align: center;
  }
}
</style>
