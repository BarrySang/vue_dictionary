<template>
  <div class="bg-slate-50 rounded-lg p-4 mb-3">
    <h3 v-if="partOfSpeech" class="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3 pb-2 border-b border-slate-200">
      {{ partOfSpeech }}
    </h3>
    <div class="space-y-2">
      <DefinitionComponent
        v-for="definition in definitions"
        :key="definition.definition"
        :definition="definition.definition"
        :example="definition.example"
      />
    </div>
    <div v-if="synonyms.length" class="mt-3 pt-2 border-t border-slate-200">
      <p class="text-sm text-slate-600">
        <span class="font-medium text-slate-700">Synonyms:</span> {{ synonyms }}
      </p>
    </div>
    <div v-if="antonyms.length" class="mt-2">
      <p class="text-sm text-slate-600">
        <span class="font-medium text-slate-700">Antonyms:</span> {{ antonyms }}
      </p>
    </div>
  </div>
</template>

<script>
import DefinitionComponent from './DefinitionComponent.vue'

export default {
  name: 'MeaningComponent',
  components: {
    DefinitionComponent,
  },
  props: {
    partOfSpeech: String,
    antonyms: String,
    synonyms: String,
    definitions: Array,
  },
}
</script>
