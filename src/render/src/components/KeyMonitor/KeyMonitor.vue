<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import {
  onKeyStroke
} from "@vueuse/core"

export default defineComponent({
  name: "key-monitor",
  setup() {
    const keys = ref('s')

    onKeyStroke(keys.value, () => {
      console.log('eee')
    })

    setTimeout(() => {
      console.log('移除')
      keys.value = 'a'
    }, 3000)

    return {}
  }
})
</script>

<style scoped lang="less">

</style>
