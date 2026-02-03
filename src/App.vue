<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
    <header class="bg-white border-b border-slate-200 shadow-sm">
      <div class="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <HeaderComponent title="Dictionary Web App" />
        <nav class="flex items-center gap-1 text-sm">
          <RouterLink
            to="/"
            class="px-3 py-1.5 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            active-class="!text-indigo-700 !bg-indigo-50 font-medium"
          >Home</RouterLink>
          <RouterLink
            to="/about"
            class="px-3 py-1.5 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            active-class="!text-indigo-700 !bg-indigo-50 font-medium"
          >About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>
