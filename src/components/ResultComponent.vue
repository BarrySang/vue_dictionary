<template>
  <div class="container">
    <div class="column word-description">
      <p class="word">{{ word }}</p>
      <p class="phonetic-text">{{ phoneticText }}</p>
      <PhoneticComponent
        v-for="phonetic in phonetics"
        :key="phonetic.sourceUrl"
        :audio="phonetic.audio"
        :license="phonetic.license"
        :sourceUrl="phonetic.sourceUrl"
      />
      <SourceUrlComponent v-for="url in sourceUrls" :key="url" :url="url" />
    </div>
    <div class="column meanings-container">
      <MeaningComponent
        v-for="meaning in meanings"
        :key="meaning.partOfSpeech"
        :partOfSpeech="meaning.partOfSpeech"
        :antonyms="meaning.antonyms.join(', ')"
        :synonyms="meaning.synonyms.join(', ')"
        :definitions="meaning.definitions"
      />
    </div>
    <div class="license-container">
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

<style scoped>
.container {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  gap: 10px;
}

.word-description {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  color: rgb(111, 64, 64);
}

.word,
.phonetic-text {
  font-size: 26px;
  margin: 5px;
  color: black;
}

.license-container {
  grid-column: span 2;
  text-align: center;
  margin-top: 20px;
}
</style>
