<template>
  <div class="keys-board-key-con">
    <img v-if="useMetaKey" src="src/asserts/mac-command.png" alt="">
    <img v-else-if="useAltKey" src="src/asserts/mac-option.png" alt="">
    <span v-else>{{ keyText }}</span>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref
} from 'vue'

const SpecialKeyArr = ["MetaLeft", "MetaRight", "AltLeft", "AltRight"]
const SpecialKeySet = new Set(SpecialKeyArr)

const regMeta = /^Meta/
const regAlt = /^Alt/

export default defineComponent({
  name: "keys-board-key",
  props: {
    text: {
      type: String
    }
  },
  setup(props) {
    const keyText = props.text

    const useMetaKey = computed(() => {
      return regMeta.test(keyText) && SpecialKeySet.has(keyText)
    })

    const useAltKey = computed(() => {
      return regAlt.test(keyText) && SpecialKeySet.has(keyText)
    })

    return {
      keyText,
      useMetaKey,
      useAltKey
    }
  }
})
</script>

<style scoped lang="less">
.keys-board-key-con {
  @size: 40px;
  align-items: center;
  border-radius: 3px;
  display: flex;
  height: @size;
  min-width: @size;
  justify-content: center;
  margin-right: 20px;
  padding: 0 10px 2px 10px;
  box-sizing: border-box;
  font-size: 20px;

  img {
    @size: 30px;
    height: @size;
    width: @size;
  }
}
</style>
