<script setup lang="ts">
import { ref } from 'vue'
import SectionComponent from '@/components/SectionComponent.vue'

// ✅ Reactive state
const wordSearched = ref(false)
const results = ref<any[]>([])

// ✅ Method to fetch dictionary data
async function searchWord(word: string) {
  wordSearched.value = true
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    results.value = await response.json()
  } catch (error) {
    console.error('fetch error:', error)
    results.value = []
  }
}
</script>

<template>
  <main>
    <SectionComponent :wordSearched="wordSearched" :results="results" @transmitToApp="searchWord" />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
</style>
