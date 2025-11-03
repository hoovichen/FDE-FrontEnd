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

<style scoped>
.product-modal {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.55);
  opacity: 0; pointer-events: none;
  display: grid; place-items: center;
  transition: opacity .2s ease;
}
.product-modal.is-open { opacity: 1; pointer-events: auto; }

.modal-panel {
  width: min(960px, 92vw);
  background: #fff; border-radius: 16px;
  box-shadow: 0 30px 60px rgba(0,0,0,.25);
  overflow: hidden; position: relative;
  transform: translateY(12px);
  animation: rise .2s ease forwards;
}
@keyframes rise { to { transform: none; } }

.modal-close {
  position: absolute; right: 12px; top: 10px;
  border: 0; background: transparent; font-size: 28px; cursor: pointer;
}

.modal-body { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.modal-image { padding: 18px; background: #fafafa; display: grid; place-items: center; }
.modal-image img { width: 100%; height: 100%; object-fit: contain; }

.modal-info { padding: 22px; }
.modal-title { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
.modal-summary { color: #555; line-height: 1.6; }

@media (max-width: 768px) {
  .modal-body { grid-template-columns: 1fr; }
}
</style>
