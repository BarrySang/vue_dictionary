const REGION_PATTERN = /-(us|uk|au|ca|in|nz|ie|gb)[-_.]/i

export function detectAudioLabel(url, index) {
  if (url) {
    const match = url.match(REGION_PATTERN)
    if (match) return match[1].toUpperCase()
  }
  return `Audio ${index + 1}`
}

export function playAudio(url) {
  if (!url) return
  new Audio(url).play().catch(() => {})
}
