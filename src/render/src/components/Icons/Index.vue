<script lang="tsx">
import * as _ from 'lodash'
import {
  defineComponent,
  h, resolveComponent,
  computed,
  PropType, CSSProperties,
  ComputedRef
} from "vue"
import {
  addUnit
} from "@/utils";
import type {
  IconRegisterOption,
  iconNewName
} from './types'

type iconsMap  = {
  [key in iconNewName]: IconRegisterOption
}

const icons: iconsMap = {} as iconsMap

function registerIcon(iconInfo: IconRegisterOption) {
  const name = iconInfo.name
  icons[name] = iconInfo
}

export default defineComponent({
  name: 'Icons',
  props: {
    name: {
      type: String as PropType<iconNewName>
    }
  },
  setup(props) {
    const name = icons[props.name].icon
    const styleSheet = icons[props.name].style
    let iconStyle: ComputedRef<CSSProperties> = {}

    if (styleSheet) {
      iconStyle = computed(
        (): CSSProperties => ({
          width: addUnit(styleSheet.width),
          height: addUnit(styleSheet.height),
          color: styleSheet.color,
          cursor: styleSheet.cursor || 'default'
        })
      )
    }

    return () => {
      return (
        <div style={iconStyle.value}>
          { h(resolveComponent(name), {
            style: iconStyle.value
          }) }
        </div>
      )
    }
  }
})

export {
  registerIcon
}
</script>