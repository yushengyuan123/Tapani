<template>
  <teleport to="body">
    <div class="download-operate-con">
      <div class="download-operate-item-con">
        <div class="download-operate-item" @click="addTask">
          <img src="@/asserts/add.png" alt="">
        </div>
        <div class="download-operate-item">
          <img src="@/asserts/stop.png" alt="">
        </div>
        <div class="download-operate-item">
          <img src="@/asserts/delete.png" alt="">
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "download-operate",
  emits: ['add-task'],
  setup(props, context) { 
    const addTask = () => {     
      context.emit('add-task')
    }

    return {
      addTask
    }
  }
})
</script>

<style scoped lang="less">
.download-operate-con {
  position: fixed;
  right: 50px;
  bottom: 200px;
  z-index: 100;
}

.download-operate-item-con {
  height: 35px;
  width: 100%;
  box-sizing: border-box;

  img {
    @size: 20px;
    height: @size;
    width: @size;
  }
}

.download-operate-item {
  @size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: @size;
  width: @size;
  border-radius: 50%;
  margin: 20px;
  cursor: pointer;
}
</style>
