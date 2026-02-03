<template>
  <div class="flex items-center gap-2 w-full">
    <input
      placeholder="Search for a word..."
      v-model="word"
      @keyup.enter="triggerWordSearch"
      class="flex-1 h-12 px-4 text-base text-slate-700 bg-white border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
    />
    <button
      @click="triggerWordSearch"
      class="h-12 px-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      word: '',
    }
  },
  methods: {
    triggerWordSearch() {
      this.$emit('triggerWordSearch', this.word)
    },
  },
  emits: ['triggerWordSearch'],
}
</script>
