<template>
  <div class="definition-container container">
    <div class="definition-item">
      <p class="data-title">Definition</p>
      <p>{{ definition }}</p>
    </div>
    <div class="definition-item" v-if="example">
      <p class="data-title">Example</p>
      <p>{{ example }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefinitionComponent',
  props: {
    definition: String,
    example: String,
  },
}
</script>

<style scoped>
.definition-item {
  margin: 3px;
}

.definition-container {
  margin: 10px !important;
  background-color: rgb(240, 234, 234) !important;
  padding: 10px;
  border-radius: 5px;
  width: 95% !important;
}

/* .data-title {
  color: rgb(21, 34, 68);
} */

.definition-container p {
  font-size: 18px;
  display: block;
  margin: 0;
  color: rgb(27, 30, 33);
}
</style>
