<template>
  <div
    v-if="keysArr.length > 0"
    class="keys-con"
    @click="openKeySetDialog"
  >
    <div
      v-for="(item, index) in keysArr"
      :key="item"
      class="keys-con-text"
    >
      <img v-if="useMetaKey(item)" src="src/asserts/mac-command.png" alt="">
      <img v-else-if="useAltKey(item)" src="src/asserts/mac-option.png" alt="">
      <span v-else>{{ formatKey(item) }}</span>
      <span v-if="index !== keysArr.length - 1">
        +
      </span>
    </div>
  </div>
  <div
    v-else
    class="keys-con"
    @click="openKeySetDialog"
  >
    <div>添加...</div>
  </div>
  <key-modify-dialog
    v-model:visible="visible"
    v-if="visible"
    @save="keySave"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  ref, SetupContext,
  toRef
} from 'vue'
import KeyModifyDialog from "@/components/KeyModifyDialog/KeyModifyDialog.vue"

const SpecialKeyArr = ["MetaLeft", "MetaRight", "AltLeft", "AltRight"]
const SpecialKeySet = new Set(SpecialKeyArr)

const regMeta = /^Meta/
const regAlt = /^Alt/

const regKey = /Key[A-Z]/
const regShift = /^Shift/

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
  setup(props, context: SetupContext) {
    const visible = ref(false)
    const openKeySetDialog = () => {
      visible.value = true
    }
    const keysArr = toRef(props, 'keys')

    const useMetaKey = (keyText) => {
      return regMeta.test(keyText) && SpecialKeySet.has(keyText)
    }

    const useAltKey = (keyText) => {
      return regAlt.test(keyText) && SpecialKeySet.has(keyText)
    }

    const formatKey = (word: string) => {
      if (regKey.test(word)) {
        word = word[word.length - 1]
      } else if (word === "Control") {
        word = 'Ctrl'
      } else if (regShift.test(word)) {
        word = 'Shift'
      }
      return word;
    }

    const keySave = (keys) => {
      context.emit('save-key', keys)
    }

    return {
      visible,
      keysArr,
      openKeySetDialog,
      keySave,
      formatKey,
      useMetaKey,
      useAltKey
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
}

.keys-con-text {
  display: flex;
  height: 100%;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1px;
  }
}
</style>
