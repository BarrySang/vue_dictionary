<template>
  <h1 class="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight shrink-0">{{ title }}</h1>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
  },
}
</script>
