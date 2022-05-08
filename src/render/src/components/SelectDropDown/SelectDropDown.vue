<template>
  <div class="select-dropdown-con">
    <div class="select-dropdown-text">
      {{ currentSelectValue }}
    </div>
    <div
      class="select-dropdown-arrow-con"
      @click="changeDirection"
    >
      <img
        :class="{reverse: arrowDirection}"
        src="src/asserts/arrow.png"
        alt=""
      >
    </div>
    <div
      v-if="arrowDirection"
      class="select-dropdown-menu-con"
    >
      <div
        v-for="(item, index) in dropdownMenu"
        :key="index"
        class="select-dropdown-menu-item-con"
        :class="{active: activeIndex === index}"
        @click="changeItem(index)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType, SetupContext, computed, CSSProperties
} from 'vue'

interface DropdownMenuItem {
  value: string
}

export default defineComponent({
  name: "select-dropdown",
  props: {
    menu: {
      type: Array as PropType<DropdownMenuItem[]>
    }
  },
  setup(props, context: SetupContext) {
    const dropdownMenu: DropdownMenuItem[] = props.menu
    // 箭头方向，true代表向上，false表示向下
    const arrowDirection = ref(false)
    const activeIndex = ref(0)

    const currentSelectValue = computed(() => {
      return dropdownMenu[activeIndex.value].value
    })

    const dropDownMenuStyle = computed(
      (): CSSProperties => {
        if (!arrowDirection.value) {
          return {
            height: 0,
          }
        }
      }
    )

    const changeDirection = () => {
      arrowDirection.value = !arrowDirection.value
    }

    const changeItem = (index) => {
      activeIndex.value = index
      arrowDirection.value = !arrowDirection.value
      context.emit('select-change')
    }

    return {
      dropdownMenu,
      activeIndex,
      arrowDirection,
      currentSelectValue,
      dropDownMenuStyle,
      changeDirection,
      changeItem
    }
  }
})
</script>

<style scoped lang="less">
.select-dropdown-con {
  position: relative;
  display: flex;
  height: 23px;
  border-radius: 4px;
}
.select-dropdown-text {
  flex: 1;
  line-height: 23px;
  text-align: center;
  font-size: 13px;
}
.select-dropdown-arrow-con {
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 10px;

  img {
    @size: 15px;
    height: @size;
    width: @size;
    transition: all 0.5s;
    cursor: pointer;

    &.reverse {
      transform: rotate(180deg);
    }
  }
}
.select-dropdown-menu-con {
  position: absolute;
  top: 26px;
  width: calc(100% - 40px);
  z-index: 1000;
  margin-right: 20px;
  border-radius: 4px;
  overflow: hidden;
  padding: 5px 5px 0;
}
.select-dropdown-menu-item-con {
  height: 28px;
  line-height: 28px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
