<template>
  <div class="space-y-4">
    <SearchComponent @triggerWordSearch="transmitToApp" />
    <div v-show="wordSearched">
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
      <div v-else>
        <WordNotFoundComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue'
import ResultComponent from './ResultComponent.vue'
import WordNotFoundComponent from './WordNotFoundComponent.vue'

export default {
  name: 'SectionComponent',
  components: {
    SearchComponent,
    ResultComponent,
    WordNotFoundComponent,
  },
  props: {
    meanings: Array,
    results: Array,
    wordSearched: Boolean,
  },
  methods: {
    transmitToApp(word) {
      this.$emit('transmitToApp', word)
    },
  },
  emits: ['transmitToApp'],
}
</script>
