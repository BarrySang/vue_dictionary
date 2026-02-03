<template>
  <div>
    <button
      @click="toggleVisibility"
      class="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
    >
      License
      <span class="text-[10px]">{{ isVisible ? '−' : '+' }}</span>
    </button>
    <div v-show="isVisible" class="mt-1 space-y-0.5">
      <p class="text-[10px] text-slate-400">{{ name }}</p>
      <p class="text-[10px] text-slate-400 break-all">{{ url }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicenseComponent',
  props: {
    name: String,
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
