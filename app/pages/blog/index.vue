<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const router = useRouter()

onMounted(() => {
  router.replace(`/blog/${lang.value}`)
})
</script>

<template>
  <div />
</template>
