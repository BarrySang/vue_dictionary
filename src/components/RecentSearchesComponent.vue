<script setup>
import { computed } from 'vue'
import { useDictionary } from '@/composables/useDictionary'

const { word, recentSearches, searchWord } = useDictionary()

const items = computed(() => recentSearches.value.filter((w) => w !== word.value.toLowerCase()))
</script>

<template>
  <div v-if="items.length">
    <p class="text-sm font-semibold text-slate-700 mb-2">Recent</p>
    <ul class="divide-y divide-slate-100">
      <li v-for="item in items" :key="item">
        <button
          type="button"
          @click="searchWord(item)"
          class="w-full text-left py-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
        >{{ item }}</button>
      </li>
    </ul>
  </div>
</template>
