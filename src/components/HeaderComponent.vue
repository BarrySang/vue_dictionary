<template>
  <h1>{{ title }}</h1>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script>
export default {
  name: 'HeaderComacponent',
  props: {
    title: String,
  },
}
</script>
