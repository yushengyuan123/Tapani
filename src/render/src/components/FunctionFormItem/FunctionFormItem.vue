<template>
  <div class="function-setting-form-item">
    <div class="function-setting-form-aside">
      <div class="function-setting-form-item-title">
        {{ formLabel.title }}
      </div>
      <div class="function-setting-form-item-desc">
        {{ formLabel.desc }}
      </div>
    </div>
    <div class="function-setting-form-data">
      <div class="function-setting-form-item">
        <slot />    
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "function-form-item",
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  setup(props) {
    const formLabel = {
      title: props.title,
      desc: props.desc
    }

    return {
      formLabel
    }
  }
})
</script>

<style scoped lang="less">
.function-setting-form-item {
  display: flex;
  width: 100%;
  padding: 10px 0;

  .function-setting-form-aside {
    width: 200px;

    .function-setting-form-item-title {
      font-size: 14px;
      padding-bottom: 4px;
    }

    .function-setting-form-item-desc {
      font-size: 12px;
    }
  }

  .function-setting-form-data {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    
    .function-setting-form-item {
      display: flex;
      justify-content: end;
      width: 150px;
    }
  }
}
</style>
