<template>
  <li class="flex gap-3">
    <span class="shrink-0 text-sm text-slate-400 tabular-nums">{{ index }}</span>
    <div>
      <p class="text-[15px] text-slate-800 leading-relaxed">{{ definition }}</p>
      <p v-if="example" class="mt-1 text-sm text-slate-500 italic leading-relaxed">&ldquo;{{ example }}&rdquo;</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DefinitionComponent',
  props: {
    definition: String,
    example: String,
    index: Number,
  },
}
</script>
