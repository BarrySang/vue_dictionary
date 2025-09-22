<template>
    <div class="section-container container">
        <SearchComponent @triggerWordSearch="transmitToApp" />
        <div class="data" v-show="wordSearched">
            <div class="results-container"  v-if="results.length">
                <ResultComponent v-for="(result, index) in results" :key="index" :license="result.license" :meanings="result.meanings" :phoneticText="result.phonetic" :phonetics="result.phonetics" :sourceUrls="result.sourceUrls" :word="result.word" />
            </div>
            
            <div class="noresults-container" v-else>
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
        WordNotFoundComponent
    },
    props: {
        meanings: Array,
        results: Array,
        wordSearched: Boolean
    },
    methods: {
        transmitToApp(word) {
            this.$emit('transmitToApp', word)
        }
    },
    emits: ['transmitToApp']
}
</script>

<style scoped>
.container {
    background-color: rgb(240, 234, 234);
    margin: auto;
}

@media screen and (max-width: 600px) {
  .container {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    padding: 15px;
  }
}
</style>