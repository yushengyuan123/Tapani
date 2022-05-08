<script lang="tsx">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "wrapper-file-upload",
  props: {
    wrapperUpload: {
      type: Boolean,
      default: false
    },
  },
  setup(props, context) {
    const wrapperUpload = props.wrapperUpload

    const click = () => {
      context.emit('normal-click')
    }

    return () => {
      if (wrapperUpload) {
        return (
          <el-upload
            {...context.attrs}
          >
            {context.slots.default()}
          </el-upload>
        )
      } else {
        return (
          <div onClick={click}>
            {context.slots.default()}
          </div>
        )
      }
    }
  }
})
</script>

<style scoped lang="less">

</style>
