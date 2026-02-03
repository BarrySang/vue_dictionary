<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
    <div class="mb-4 pb-4 border-b border-slate-100">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{{ word }}</h2>
      <p v-if="phoneticText" class="text-lg text-indigo-600 mt-1">{{ phoneticText }}</p>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/4 space-y-3">
        <PhoneticComponent
          v-for="phonetic in phonetics"
          :key="phonetic.sourceUrl"
          :audio="phonetic.audio"
          :license="phonetic.license"
          :sourceUrl="phonetic.sourceUrl"
        />
        <SourceUrlComponent v-for="url in sourceUrls" :key="url" :url="url" />
      </div>

      <div class="md:w-3/4">
        <MeaningComponent
          v-for="meaning in meanings"
          :key="meaning.partOfSpeech"
          :partOfSpeech="meaning.partOfSpeech"
          :antonyms="meaning.antonyms.join(', ')"
          :synonyms="meaning.synonyms.join(', ')"
          :definitions="meaning.definitions"
        />
      </div>
    </div>

    <div class="mt-4 pt-3 border-t border-slate-100 text-center">
      <LicenseComponent :name="license.name" :url="license.url" />
    </div>
  </div>
</template>

<script>
import MeaningComponent from './MeaningComponent.vue'
import PhoneticComponent from './PhoneticComponent.vue'
import SourceUrlComponent from './SourceUrlComponent.vue'
import LicenseComponent from './LicenseComponent.vue'

export default {
  name: 'ResultComponent',
  components: {
    PhoneticComponent,
    MeaningComponent,
    SourceUrlComponent,
    LicenseComponent,
  },
  props: {
    phonetics: Array,
    meanings: Array,
    word: String,
    phoneticText: String,
    sourceUrls: Array,
    license: Object,
  },
}
</script>
