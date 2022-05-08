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
      type: String as PropType<OperatorKeyTypes>
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
      checkIsSetKey,
      getSetKey,
      updateKeyMap
    } = useKeyBoardSet()
    const operateName = props.operate

    const hasKey = computed(() => {
      return checkIsSetKey(operateName)
    })

    const getKey = computed(() => {
      const res = getSetKey(operateName)
      return Array.from(res)
    })

    const updateKeySave = (keys) => {
      updateKeyMap(operateName, keys)
    }

    return {
      text,
      hasKey,
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
