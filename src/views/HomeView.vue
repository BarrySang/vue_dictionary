<script setup>
import ResultComponent from '@/components/ResultComponent.vue'
import WordNotFoundComponent from '@/components/WordNotFoundComponent.vue'
import { useDictionary } from '@/composables/useDictionary'

const { wordSearched, loading, results } = useDictionary()
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div v-if="!wordSearched" class="text-center py-20">
      <h1 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-3">Look up a word</h1>
      <p class="text-slate-500">Search above, or press <kbd class="px-1.5 py-0.5 rounded border border-slate-300 text-sm">/</kbd> to get started.</p>
    </div>

    <div v-else-if="loading" class="flex justify-center py-20">
      <div class="h-8 w-8 rounded-full border-2 border-slate-200 border-t-indigo-600 animate-spin"></div>
    </div>

    <div v-else>
      <div v-if="results.length" class="space-y-6">
        <ResultComponent
          v-for="(result, index) in results"
          :key="index"
          :license="result.license"
          :meanings="result.meanings"
          :phoneticText="result.phonetic"
          :phonetics="result.phonetics"
          :sourceUrls="result.sourceUrls"
          :word="result.word"
        />
      </div>
      <WordNotFoundComponent v-else />
    </div>
  </div>
</template>
