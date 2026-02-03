<template>
  <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{{ title }}</h1>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
  },
}
</script>
