<template>
  <div class="keys-con" @click="openKeySetDialog">
    <img src="src/asserts/mac-command.png" alt="">
    <div>K</div>
  </div>
  <key-modify-dialog
    v-model:visible="visible"
    v-if="visible"
    @save="keySave"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent, PropType,
  ref
} from 'vue'
import {
  useKeyBoardSet,
  OperatorKeyTypes
} from "../../../../store/keyboard"
import KeyModifyDialog from "@/components/KeyModifyDialog/KeyModifyDialog.vue"

export default defineComponent({
  name: "keys",
  props: {
    keys: {
      type: Array
    }
  },
  components: {
    [KeyModifyDialog.name]: KeyModifyDialog
  },
  setup(props) {
    const visible = ref(false)
    const openKeySetDialog = () => {
      visible.value = true
    }
    console.log('aaa')

    console.log(props)

    const keySave = (keys) => {
      console.log('用户选择key')
      console.log(keys)
      // useKeyBoardSet(props.operate)
    }

    return {
      visible,
      openKeySetDialog,
      keySave
    }
  }
})
</script>

<style scoped lang="less">
.keys-con {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  float: right;
  opacity: .8;
  cursor: pointer;
  border-radius: 6px;
  padding: 0 10px;

  img {
    height: 20px;
    width: 20px;
  }
}

.keys-con-plus {

}
</style>
