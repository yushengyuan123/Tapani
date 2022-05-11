<template>
  <div class="key-board-item-con">
    <div class="key-board-item-text">
      {{ text }}
    </div>
    <div class="key-board-item-button-con">
      <keys
        :keys="getKey"
        @save-key="updateKeySave"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed
} from 'vue'
import Keys from "./Keys.vue"
import {
  useKeyBoardSet,
  OperatorKeyTypes
} from "../../../../store/keyboard";


export default defineComponent({
  name: "key-board-item",
  props: {
    operate: {
      type: String as PropType<OperatorKeyTypes>,
      default: []
    },
    text: {
      type: String
    }
  },
  components: {
    [Keys.name]: Keys
  },
  setup(props) {
    const text = props.text
    const {
      getSetKey,
      updateKeyMap
    } = useKeyBoardSet()
    const operateName = props.operate

    const getKey = computed(() => {
      return getSetKey(operateName)
    })

    const updateKeySave = (keys: string[]) => {
      if (keys.length > 0) {
        updateKeyMap(operateName, keys)
      }
    }

    return {
      text,
      getKey,
      updateKeySave
    }
  }
})
</script>

<style scoped lang="less">
.key-board-item-con {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  font-size: 14px;
}

.key-board-item-button-con {
  flex: 1;
  text-align: right;
  line-height: 40px;
  cursor: pointer;
}
</style>
