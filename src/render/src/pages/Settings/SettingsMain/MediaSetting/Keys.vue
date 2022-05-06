<template>
   <div class="keys-con">

   </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, watchEffect
} from 'vue'
import {useMagicKeys, whenever} from "@vueuse/core"

export default defineComponent({
  name: "Keys",
  setup() {
    const { current } = useMagicKeys()

    const keys = computed(() => {
      console.log('案件发生变化', current)
      return Array.from(current)
    })

    watchEffect(() => {
      console.log(current)
    })

    whenever(() => {
      return current.has('a')
    }, () => {
      console.log(current)
    })

    return {}
  }
})
</script>

<style scoped lang="less">
.keys-con {
  border: 1px solid red;
}
</style>
