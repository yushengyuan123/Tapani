<template>
  <global-block
    v-if="visible"
  >
    <div class="key-modify-dialog-con">
      <el-container id="container">
        <div class="key-modify-dialog-header">
          <el-header>
            {{$t("key_modify_dialog.title")}}
          </el-header>
        </div>
        <el-main>
          <div class="key-modify-dialog-content">
            <template
              v-for="(item) in keys"
              :key="item"
            >
              <keys-board-key
                :text="formatKey(item)"
              />
            </template>
          </div>
          <div class="key-modify-dialog-save-notice">
            {{$t("key_modify_dialog.notice")}}
          </div>
        </el-main>
        <el-footer>
          <div
            class="key-modify-dialog-cancel-button"
            @click="onCancel"
          >
            {{$t("key_modify_dialog.cancel_btn")}}
          </div>
        </el-footer>
      </el-container>
    </div>
  </global-block>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  SetupContext,
  toRef
} from 'vue'
import GlobalBlock from "@/components/GlobalBlock/GlobalBlock.vue"
import Progress from "@/components/VideoControls/Progress.vue"
import KeysBoardKey from "../KeysBoardKey/KeysBoardKey.vue"
import {
  useMagicKeys,
} from "@vueuse/core"

const regKey = /Key[A-Z]/
const regShift = /^Shift/

export default defineComponent({
  name: "key-modify-dialog",
  props: {
    visible: {
      type: Boolean
    }
  },
  emits: ['update:visible', 'save'],
  components: {
    [GlobalBlock.name]: GlobalBlock,
    [Progress.name]: Progress,
    [KeysBoardKey.name]: KeysBoardKey
  },
  setup(props, context: SetupContext) {
    const { current } = useMagicKeys()
    const visible = toRef(props, "visible")

    const keys = computed(() => {
      return Array.from(current)
    })

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

    const onSave = () => {
      context.emit('save', Array.from(current))
      context.emit('update:visible', false)
    }

    const onCancel = () => {
      context.emit('update:visible', false)
    }

    onMounted(() => {
      setTimeout(() => {
        onSave()
      }, 3000)
    })

    return {
      keys,
      visible,
      formatKey,
      onCancel
    }
  }
})
</script>

<style scoped lang="less">
.key-modify-dialog-con {
  width: 500px;
  background-color: #1f2427;
  border-radius: 10px;
  overflow: hidden;
}

.key-modify-dialog-header {
  height: 50px;
  width: 100%;
  line-height: 50px;
}

.key-modify-dialog-content {
  height: 60px;
  display: flex;
}

.key-modify-dialog-cancel-button {
  float: right;
  padding: 6px 24px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 0 0 0.2rem rgb(40 138 222 / 50%);
  font-weight: bold;
  cursor: pointer;
}
</style>
