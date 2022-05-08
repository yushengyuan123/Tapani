<template>
  <un-open />
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import UnOpen from "@/components/UnOpen/UnOpen.vue"

export default defineComponent({
  name: "Volume",
  components: {
    [UnOpen.name]: UnOpen
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">

</style>
