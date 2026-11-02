import { ref } from 'vue'

const RECENT_KEY = 'recentSearches'
const MAX_RECENT = 5

function loadRecent() {
  try {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY))
    return Array.isArray(stored) ? stored : []
  } catch {
    return []
  }
}

const word = ref('')
const wordSearched = ref(false)
const loading = ref(false)
const results = ref([])
const recentSearches = ref(loadRecent())

function addRecent(searchedWord) {
  const normalized = searchedWord.trim().toLowerCase()
  if (!normalized) return
  recentSearches.value = [normalized, ...recentSearches.value.filter((w) => w !== normalized)].slice(0, MAX_RECENT)
  localStorage.setItem(RECENT_KEY, JSON.stringify(recentSearches.value))
}

async function searchWord(searchedWord) {
  const trimmed = (searchedWord || '').trim()
  if (!trimmed) return

  word.value = trimmed
  wordSearched.value = true
  loading.value = true

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(trimmed)}`)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    results.value = await response.json()
    addRecent(trimmed)
  } catch (error) {
    console.error('fetch error:', error)
    results.value = []
  } finally {
    loading.value = false
  }
}

export function useDictionary() {
  return { word, wordSearched, loading, results, recentSearches, searchWord }
}
