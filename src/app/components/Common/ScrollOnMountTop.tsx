'use client'

import { useEffect } from 'react'

export default function ScrollOnMountTop() {
  useEffect(() => {
    // Scroll instantly to the top on mount
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])
  return null
}
