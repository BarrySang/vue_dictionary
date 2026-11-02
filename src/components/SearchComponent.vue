<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDictionary } from '@/composables/useDictionary'

const { word, searchWord } = useDictionary()
const route = useRoute()
const router = useRouter()

const input = ref(word.value)
const isFocused = ref(false)
const inputRef = ref(null)

function submit() {
  if (!input.value.trim()) return
  searchWord(input.value)
  if (route.name !== 'home') router.push({ name: 'home' })
}

function clear() {
  input.value = ''
  inputRef.value?.focus()
}

function handleShortcut(event) {
  if (event.key !== '/') return
  const active = document.activeElement
  const isTyping = active && ['INPUT', 'TEXTAREA'].includes(active.tagName)
  if (isTyping) return
  event.preventDefault()
  inputRef.value?.focus()
}

onMounted(() => window.addEventListener('keydown', handleShortcut))
onUnmounted(() => window.removeEventListener('keydown', handleShortcut))
</script>

<template>
  <div class="relative flex items-center w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      class="absolute left-3.5 text-slate-400 pointer-events-none"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
    </svg>
    <input
      ref="inputRef"
      v-model="input"
      placeholder="Search a word"
      @keyup.enter="submit"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="w-full h-11 pl-10 pr-10 text-sm text-slate-800 bg-white border border-slate-300 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
    />
    <button
      v-if="input"
      type="button"
      @click="clear"
      aria-label="Clear search"
      class="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 1 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
    <kbd
      v-else-if="!isFocused"
      class="absolute right-3 hidden sm:flex h-5 w-5 items-center justify-center rounded border border-slate-200 text-[11px] text-slate-400"
      >/</kbd
    >
  </div>
</template>
