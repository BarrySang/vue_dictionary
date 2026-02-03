<template>
  <div>
    <button
      @click="toggleVisibility"
      class="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
    >
      Source URL
      <span class="text-[10px]">{{ isVisible ? '−' : '+' }}</span>
    </button>
    <p v-show="isVisible" class="mt-1 text-[10px] text-slate-400 break-all">
      {{ url }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SourceUrlComponent',
  props: {
    url: String,
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
}
</script>
