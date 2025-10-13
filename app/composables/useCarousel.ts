// app/composables/useCarousel.ts
// 管理当前下标、上一张/下一张、自动播放、暂停（鼠标悬停 or 不在视口时暂停）、支持“减少动画”偏好。
export function useCarousel(length: number, intervalMs = 5000) {
  const index = ref(0)
  const playing = ref(true)
  let timer: number | undefined

  const next = () => { index.value = (index.value + 1) % length }
  const prev = () => { index.value = (index.value - 1 + length) % length }
  const goTo = (i: number) => { index.value = (i + length) % length }

  const start = () => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    stop()
    playing.value = true
    timer = window.setInterval(next, intervalMs)
  }
  const stop = () => { if (timer) window.clearInterval(timer); timer = undefined; playing.value = false }

  onMounted(start)
  onBeforeUnmount(stop)

  return { index, next, prev, goTo, start, stop, playing }
}
