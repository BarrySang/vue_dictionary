<template>
  <div class="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
    <h3 class="font-serif text-xl font-bold text-red-700 mb-1">Word not found</h3>
    <p class="text-sm text-red-600">Sorry, we couldn't find a definition for that word. Please try another.</p>
  </div>
</template>

<script>
export default {
  name: 'WordNotFoundComponent',
  props: {
    word: String,
  },
}
</script>
