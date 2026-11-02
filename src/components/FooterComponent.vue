<template>
  <footer class="bg-white border-t border-slate-200 py-6">
    <p class="text-center text-sm text-slate-500">&copy; {{ year }} Dictionary Web App</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
