<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8 mb-6">
    <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900">{{ word }}</h2>
        <span v-if="phoneticText" class="text-lg text-slate-400">{{ phoneticText }}</span>
        <span v-if="partsOfSpeechLabel" class="hidden sm:inline text-base text-slate-400">· {{ partsOfSpeechLabel }}</span>
      </div>
      <div v-if="phoneticsWithAudio.length" class="flex flex-wrap gap-2">
        <AudioPillComponent
          v-for="(phonetic, i) in phoneticsWithAudio"
          :key="phonetic.audio"
          :audio="phonetic.audio"
          :index="i"
        />
      </div>
    </div>

    <hr class="border-slate-100 mb-2" />

    <div class="grid lg:grid-cols-[1fr_260px] gap-x-10">
      <div>
        <div v-if="tabs.length > 1" class="py-4">
          <PartOfSpeechTabsComponent :tabs="tabs" />
        </div>
        <MeaningComponent
          v-for="(meaning, i) in meanings"
          :key="meaning.partOfSpeech"
          :sectionId="tabs[i].id"
          :partOfSpeech="meaning.partOfSpeech"
          :antonyms="meaning.antonyms"
          :synonyms="meaning.synonyms"
          :definitions="meaning.definitions"
        />
      </div>

      <aside class="hidden lg:block space-y-6 pt-4">
        <TagListComponent label="Synonyms" :items="aggregatedSynonyms" />
        <TagListComponent label="Antonyms" :items="aggregatedAntonyms" />
        <RecentSearchesComponent />
        <SourcesLicenceComponent :license="license" :phonetics="phonetics" />
      </aside>
    </div>

    <div class="lg:hidden mt-2 pt-4 border-t border-slate-100">
      <SourcesLicenceComponent :license="license" :phonetics="phonetics" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MeaningComponent from './MeaningComponent.vue'
import AudioPillComponent from './AudioPillComponent.vue'
import TagListComponent from './TagListComponent.vue'
import RecentSearchesComponent from './RecentSearchesComponent.vue'
import SourcesLicenceComponent from './SourcesLicenceComponent.vue'
import PartOfSpeechTabsComponent from './PartOfSpeechTabsComponent.vue'

const props = defineProps({
  phonetics: { type: Array, default: () => [] },
  meanings: { type: Array, default: () => [] },
  word: String,
  phoneticText: String,
  sourceUrls: { type: Array, default: () => [] },
  license: { type: Object, default: null },
})

const slug = props.word?.replace(/[^a-z0-9]/gi, '') || 'word'

const phoneticsWithAudio = computed(() => props.phonetics.filter((p) => p.audio))

const tabs = computed(() =>
  props.meanings.map((meaning, i) => ({
    id: `pos-${slug}-${i}`,
    label: meaning.partOfSpeech,
    count: meaning.definitions.length,
  })),
)

const partsOfSpeechLabel = computed(() =>
  [...new Set(props.meanings.map((m) => m.partOfSpeech))].join(', '),
)

function aggregate(key) {
  const set = new Set()
  props.meanings.forEach((meaning) => meaning[key]?.forEach((item) => set.add(item)))
  return [...set]
}

const aggregatedSynonyms = computed(() => aggregate('synonyms'))
const aggregatedAntonyms = computed(() => aggregate('antonyms'))
</script>
