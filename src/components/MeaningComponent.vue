<template>
  <div class="container">
    <DefinitionComponent
      v-for="definition in definitions"
      :key="definition.definition"
      :definition="definition.definition"
      :example="definition.example"
    />
    <div class="antonyms" v-if="antonyms.length">
      <p>Antonyms: {{ antonyms }}</p>
    </div>
    <div class="synonyms" v-if="synonyms.length">
      <p>Synonyms: {{ synonyms }}</p>
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
    antonyms: String,
    synonyms: String,
    definitions: Array,
  },
}
</script>

<style scoped>
.container {
  display: flex !important;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  background-color: rgb(233, 225, 225);
  color: rgb(105, 75, 75);
  margin: 5px;
  align-items: center;
  justify-content: center;
}

.container p {
  margin-top: 10px;
}
</style>
