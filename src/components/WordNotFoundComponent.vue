<template>
  <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center mt-4">
    <h3 class="text-lg font-semibold text-red-700 mb-1">Word Not Found</h3>
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
