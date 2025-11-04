<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
import { useProductDetail } from '~/composables/useProducts'

const route = useRoute()
const router = useRouter()
const key = route.params.key as string
const { detail } = useProductDetail(key)

if (!detail.value) router.replace('/products')

// 锁定滚动（可选）
onMounted(() => { document.documentElement.style.overflow = 'hidden' })
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })

const close = () => router.push('/products')
</script>

<template>
  <!-- 覆盖层（点击空白关闭） -->
  <div class="product-modal is-open" @click.self="close">
    <div class="modal-panel" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Close" @click="close">×</button>

      <div v-if="detail" class="modal-body">
        <div class="modal-image">
          <img :src="detail.image" :alt="detail.name" decoding="async" />
        </div>
        <div class="modal-info">
          <h2 class="modal-title">{{ detail.name }}</h2>
          <p v-if="detail.summary" class="modal-summary">{{ detail.summary }}</p>
          <a v-if="detail.url" :href="detail.url" target="_blank" class="btn">Buy</a>
        </div>
      </div>
    </div>
  </div>
</template>
