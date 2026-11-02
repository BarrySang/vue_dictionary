<template>
  <section :id="sectionId" class="scroll-mt-24 py-6 first:pt-0 border-b border-slate-100 last:border-b-0">
    <h3 v-if="partOfSpeech" class="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-4">
      {{ partOfSpeech }}
    </h3>
    <ol class="space-y-4">
      <DefinitionComponent
        v-for="(definition, i) in definitions"
        :key="definition.definition"
        :index="i + 1"
        :definition="definition.definition"
        :example="definition.example"
      />
    </ol>
    <div v-if="synonyms.length || antonyms.length" class="lg:hidden mt-5 space-y-3">
      <TagListComponent label="Synonyms" :items="synonyms" />
      <TagListComponent label="Antonyms" :items="antonyms" />
    </div>
  </section>
</template>

<script>
import DefinitionComponent from './DefinitionComponent.vue'
import TagListComponent from './TagListComponent.vue'

export default {
  name: 'MeaningComponent',
  components: {
    DefinitionComponent,
    TagListComponent,
  },
  props: {
    sectionId: String,
    partOfSpeech: String,
    antonyms: Array,
    synonyms: Array,
    definitions: Array,
  },
}
</script>
