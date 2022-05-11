<template>
  <div class="menu-aside-container">
    <div class="menu-aside-top">
      <router-link :to="'/index'">
        <div class="menu-aside-btn">
          <img src="@/asserts/back.png" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from "vue"

export default defineComponent({
  name: "menu-aside",
  components: {

  }
})
</script>

<style scoped lang="less">
.menu-aside-container {
  width: 78px;
  display: flex;
  flex-flow: column;
  height: 100%;

  .menu-aside-top {
    flex: 1;
    margin-top: 20px;
  }

  .menu-aside-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 28px;
    width: 28px;
    margin: 24px auto;
    cursor: pointer;

    img {
      @size: 30px;
      height: @size;
      width: @size;
    }
  }

  .menu-aside-bottom {
    margin-bottom: 24px;
    align-items: flex-end;
  }
}
</style>
