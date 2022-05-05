<template>
  <div class="set-dialog-con">

  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "set-dialog",
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.set-dialog-con {
  @left: 70vw;
  position: absolute;
  top: 100px;
  height: 80vh;
  width: @left;
  background-color: red;
  left: 50%;
  margin-left: -35vw;

}
</style>
