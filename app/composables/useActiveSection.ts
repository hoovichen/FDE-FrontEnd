/**
 * 监听滚动，返回当前可视区块 id
 */
 export function useActiveSection(ids: string[]) {
    const activeId = ref<string>('hero')
    onMounted(() => {
      const sections = ids
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
  
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              const id = (e.target as HTMLElement).id
              activeId.value = id
              history.replaceState(null, '', `#${id}`)
            }
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.5, 1] }
      )
  
      sections.forEach(s => obs.observe(s))
      return () => obs.disconnect()
    })
    return activeId
  }
  