export function useClickOutside<T extends HTMLElement>(cb: () => void) {
  const el = ref<T | null>(null)
  const onClick = (e: MouseEvent) => {
    if (!el.value) return
    const target = e.target as Node
    if (!el.value.contains(target)) cb()
  }
  onMounted(() => document.addEventListener('click', onClick))
  onBeforeUnmount(() => document.removeEventListener('click', onClick))
  return { el }
}
