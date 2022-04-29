import {
  onMounted,
  onBeforeUnmount
} from "vue"
import type {
  Ref
} from "vue"

/**
 *
 * @param targetRef
 * @param dragRef
 * @param limitX 水平移动的范围限制
 */
export const useShrink = (
  targetRef: Ref<HTMLElement>,
  dragRef: Ref<HTMLElement>,
  limitX: [number, number] = [Infinity, Infinity],
) => {
  const transform = {
    // 距离初始位置的偏移程度
    offsetX: 0,
  }
  
  const onMouseDown = (event: MouseEvent) => {
    const mouseDownX = event.clientX
    
    const { offsetX } = transform
    
    const targetRect = targetRef.value.getBoundingClientRect()
    const targetWidth = targetRect.width
    
    const minLeft = -(targetWidth - limitX[0])
    const maxRight = limitX[1] - targetWidth
   
    const onMousemove = (event: MouseEvent) => {
      const moveX = Math.max(
        Math.min(offsetX + event.clientX - mouseDownX, maxRight),
        minLeft
      )
      
      transform.offsetX = moveX
      
      targetRef.value.style.width = moveX + targetWidth + 'px'
    }
    
    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mouseup', onMouseup)
    }
    
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  }
  
  const onDraggable = () => {
    dragRef.value.addEventListener('mousedown', onMouseDown)
  }
  
  const offDraggable = () => {
    dragRef.value.removeEventListener('mousedown', onMouseDown)
  }
  
  onMounted(() => {
    onDraggable()
  })
  
  onBeforeUnmount(() => {
    offDraggable()
  })
}