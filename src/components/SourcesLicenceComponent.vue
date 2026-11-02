<script setup>
import { ref } from 'vue'
import { detectAudioLabel } from '@/utils/audio'

defineProps({
  license: { type: Object, default: null },
  phonetics: { type: Array, default: () => [] },
})

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
    >
      <span class="transition-transform" :class="{ 'rotate-90': isOpen }">&#9656;</span>
      Sources &amp; licence
    </button>
    <p v-if="isOpen" class="mt-2 text-xs text-slate-500 leading-relaxed">
      <template v-if="license">
        Definitions from
        <a :href="license.url" target="_blank" class="text-indigo-600 hover:underline">{{ license.name }}</a>.
      </template>
      <template v-if="phonetics.some((p) => p.audio)">
        Audio:
        <template v-for="(phonetic, index) in phonetics.filter((p) => p.audio)" :key="phonetic.audio">
          <a :href="phonetic.audio" target="_blank" class="text-indigo-600 hover:underline">{{ detectAudioLabel(phonetic.audio, index) }}</a
          ><span v-if="index < phonetics.filter((p) => p.audio).length - 1"> · </span>
        </template>.
      </template>
    </p>
  </div>
</template>
