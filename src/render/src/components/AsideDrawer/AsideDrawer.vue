<template>
  <teleport to="body">
      <div
        class="aside-drawer-con"
        :class="{shrink: visible}"
      >
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="content"></slot>
        </main>
      </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent, toRef, watchEffect, watch, computed, CSSProperties
} from 'vue'
import {
  TrapFocus
} from "element-plus"

export default defineComponent({
  name: "aside-drawer",
  emits: ['update:visible'],
  props: {
    visible: {
      type: Boolean
    }
  },
  directives: {
    'trap-focus': TrapFocus
  },
  setup(props) {
    const visible = toRef(props, 'visible')
    const transitionWidth = computed(
      (): CSSProperties => {
        if (visible.value) {
          return {
            width: '270px'
          }
        }
        return {
          width: 0
        }
      }
    )

    return {
      visible,
    }
  }
})
</script>

<style scoped lang="less">
.aside-drawer-con {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -270px;
  top: 0;
  width: 270px;
  height: 100%;
  z-index: 1000;
  transition: all 0.5s;

  header {
    height: 70px;
  }

  main {
    flex: 1;
  }

  &.shrink {
    right: 0;
  }
}

</style>
