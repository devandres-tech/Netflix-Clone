import { useState, useEffect } from 'react'

const scrollY = window.scrollY || document.documentElement.scrollTop
const scrollX = window.scrollY || document.documentElement.scrollWidth

export const useScroll = () => {
  const [scrollDimensions, setScrollDimensions] = useState({ scrollY, scrollX })

  const deriveScrollDimensions = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    const scrollX = window.scrollY || document.documentElement.scrollWidth

    setScrollDimensions({ scrollY, scrollX })
  }

  useEffect(() => {
    deriveScrollDimensions()
    window.addEventListener('scroll', deriveScrollDimensions)

    return () => {
      window.removeEventListener('resize', deriveScrollDimensions)
    }
  }, [])

  return [scrollDimensions]
}
