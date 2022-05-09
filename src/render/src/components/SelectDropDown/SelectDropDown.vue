<template>
  <div class="select-dropdown-con" @click="changeDirection">
    <div class="select-dropdown-text">
      {{ currentSelectValue }}
    </div>
    <div
      class="select-dropdown-arrow-con">
      <img
        :class="{reverse: arrowDirection}"
        src="src/asserts/arrow.png"
        alt=""
      >
    </div>
    <div
      :style="animateDropdown"
      class="select-dropdown-menu-con"
    >
      <div
        v-for="(item, index) in dropdownMenu"
        :key="index"
        class="select-dropdown-menu-item-con"
        @click.stop="changeItem(index)"
      >
        <div class="select-dropdown-menu-item-correct">
          <img 
            v-if="activeIndex === index"
            src="src/asserts/correct.png" alt=""
          >
        </div>
        <p class="select-dropdown-menu-item-text">
          {{ item.value }}
        </p>
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
  emits: ['update:modelValue'],
  props: {
    menu: {
      type: Array as PropType<DropdownMenuItem[]>
    },
    modelValue: {
      type: String
    }
  },
  setup(props, context: SetupContext) {
    const dropdownMenu: DropdownMenuItem[] = props.menu
    // 箭头方向，true代表向上，false表示向下
    const arrowDirection = ref(false)
    const activeIndex = ref(0)

    dropdownMenu.forEach((item, index)=> {
      if (item.value === props.modelValue) {
        activeIndex.value = index
      }
    })
    
    const currentSelectValue = computed(() => {
      return dropdownMenu[activeIndex.value].value
    })

    const animateDropdown = computed(
      (): CSSProperties => {
        if (arrowDirection.value) {
          return {
            height: 28 * dropdownMenu.length + 'px',
            padding: "5px 5px",
            borderWidth: "0.1px"
          }
        }
        return {
          height: 0,
          padding: "0 5px",
          borderWidth: 0
        }
      }
    )

    const changeDirection = () => {
      arrowDirection.value = !arrowDirection.value
    }

    const changeItem = (index: number) => {
      activeIndex.value = index
      arrowDirection.value = !arrowDirection.value     
      context.emit('select-change', index)
    }

    return {
      dropdownMenu,
      activeIndex,
      arrowDirection,
      currentSelectValue,
      changeDirection,
      changeItem,
      animateDropdown
    }
  }
})
</script>

<style scoped lang="less">
.select-dropdown-con {
  position: relative;
  display: flex;
  height: 23px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
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
  padding: 5px 5px;
  border-style: solid;
  transition: all 0.5s;
}
.select-dropdown-menu-item-con {
  display: flex;
  height: 28px;
  line-height: 28px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  cursor: pointer;
}
.select-dropdown-menu-item-correct {
  height: 100%;
  width: 15px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  
  img {
    @size: 15px;
    height: @size;
    width: @size;
  }
}
.select-dropdown-menu-item-text {
  flex: 1;
  text-align: center;
  height: 100%;
  margin: 0;
}
</style>
