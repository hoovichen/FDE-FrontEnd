/**
 * 平滑滚动到指定 id 的元素
 * - 在诸如 Header/按钮/锚点处复用
 */
export function useScrollToId() {
  return (id: string, behavior: ScrollBehavior = 'smooth') => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior, block: 'start' })
  }
}
