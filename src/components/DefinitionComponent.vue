<template>
  <div class="bg-white rounded-lg p-4 mb-2 border border-slate-100">
    <div class="mb-2">
      <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Definition</p>
      <p class="text-sm text-slate-700 leading-relaxed">{{ definition }}</p>
    </div>
    <div v-if="example" class="mt-2 pl-3 border-l-2 border-indigo-200">
      <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Example</p>
      <p class="text-sm text-slate-600 italic leading-relaxed">{{ example }}</p>
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
