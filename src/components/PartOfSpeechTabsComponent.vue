<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true }, // [{ id, label, count }]
})

const activeId = ref(props.tabs[0]?.id)
let observer = null

function scrollTo(id) {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  const elements = props.tabs.map((tab) => document.getElementById(tab.id)).filter(Boolean)
  if (!elements.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) {
        activeId.value = visible[0].target.id
      }
    },
    { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
  )
  elements.forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      @click="scrollTo(tab.id)"
      class="px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer"
      :class="activeId === tab.id
        ? 'bg-slate-900 text-white'
        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
    >{{ tab.label }} · {{ tab.count }}</button>
  </div>
</template>
