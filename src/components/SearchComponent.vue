<template>
    <div class="container">
      <input 
        placeholder="Enter word here" 
        v-model="word" 
        @keyup.enter="triggerWordSearch"
        class="text-input" 
      />
      <button class="search-btn" @click="triggerWordSearch">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search search-icon" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchComponent',
    data() {
      return {
        word: ''
      };
    },
    methods: {
      triggerWordSearch() {
        this.$emit('triggerWordSearch', this.word);
      }
    },
    emits: ['triggerWordSearch']
  }
  </script>
  
  <style>
  .search-btn {
    width: 80px;
    height: 60px;
    margin-left: 10px;
    padding-top: 5px;
  }
  
  .search-icon {
    margin-left: 10px;
  }
  
  .text-input {
    width: 90%;
    height: 50px;
    font-size: 20px;
    padding: 10px;
  }
  </style>
  