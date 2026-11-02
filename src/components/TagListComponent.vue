<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  items: { type: Array, required: true },
  limit: { type: Number, default: 8 },
})

const expanded = ref(false)

const visibleItems = computed(() => (expanded.value ? props.items : props.items.slice(0, props.limit)))
const remaining = computed(() => props.items.length - props.limit)
</script>

<template>
  <div v-if="items.length">
    <p class="text-sm font-semibold text-slate-700 mb-2">{{ label }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in visibleItems"
        :key="item"
        class="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700"
      >{{ item }}</span>
      <button
        v-if="!expanded && remaining > 0"
        type="button"
        @click="expanded = true"
        class="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
      >+{{ remaining }} more</button>
    </div>
  </div>
</template>
