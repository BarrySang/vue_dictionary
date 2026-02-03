<script setup lang="ts">
import { ref } from 'vue'
import SectionComponent from '@/components/SectionComponent.vue'

const wordSearched = ref(false)
const results = ref<any[]>([])

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
  <div class="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
    <SectionComponent :wordSearched="wordSearched" :results="results" @transmitToApp="searchWord" />
  </div>
</template>
