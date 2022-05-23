<template>
  <textarea
    class="ta-textarea"
    :placeholder="placeholder"
    :value="content"
    name=""
    id=""
    cols="30"
    rows="10"
    @input="onChange"
  >
  </textarea>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: "ta-textarea",
  emits: ["update:value"],
  props: {
    placeholder: {
      type: String
    }
  },
  setup(props, context) {
    const content = ref('')

    const onChange = () => {
      console.log(
        content.value
      );
      
      context.emit('update:value', content.value)
    }

    return {
      content,
      onChange,
      placeholder: props.placeholder
    }
  }
})
</script>

<style scoped lang="less">
.ta-textarea {
  box-sizing: border-box;
  padding: 5px 11px;
}
</style>
