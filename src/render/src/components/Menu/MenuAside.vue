<template>
  <div class="menu-aside-container">
    <div class="menu-aside-top">
      <router-link :to="'/index'">
        <div class="menu-aside-download menu-aside-btn">
          <icon-collect name="video"/>
        </div>
      </router-link>
    </div>
    <div class="menu-aside-bottom menu-aside-btn">
      <router-link :to="'/settings'">
        <icon-collect name="setting"/>
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
  background: rgba(29, 22, 22, 0.6);

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
  }

  .menu-aside-bottom {
    margin-bottom: 24px;
    align-items: flex-end;
  }
}
</style>
