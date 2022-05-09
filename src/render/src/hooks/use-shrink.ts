import {
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
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
  const instance = getCurrentInstance()
  const defaultWidth = limitX[1]
  const actualRange = defaultWidth - limitX[0]
  
  const onMouseDown = (event: MouseEvent) => {
    const mouseDownX = event.clientX
    
    const targetRect = targetRef.value.getBoundingClientRect()
    const targetWidth = targetRect.width
    
    const minLeft = -(targetWidth - limitX[0])
    const maxRight = limitX[1] - targetWidth
   
    const onMousemove = (event: MouseEvent) => {
      const moveX = Math.max(
        Math.min(event.clientX - mouseDownX, maxRight),
        minLeft
      )
      
      const curWidth = moveX + targetWidth
      targetRef.value.style.width = curWidth + 'px'
      
      const percentage = ((curWidth - limitX[0]) / actualRange).toFixed(4)
      
      instance!.emit('change', percentage)
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
