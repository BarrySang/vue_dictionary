<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
    <header class="sticky top-0 z-10 bg-white border-b border-slate-200">
      <div class="max-w-5xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-wrap items-center gap-y-3 gap-x-4">
        <HeaderComponent title="Dictionary" />

        <div class="order-3 sm:order-2 w-full sm:w-auto sm:flex-1 sm:max-w-md">
          <SearchComponent />
        </div>

        <nav class="order-2 sm:order-3 ml-auto sm:ml-0 flex items-center gap-1 text-sm">
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
