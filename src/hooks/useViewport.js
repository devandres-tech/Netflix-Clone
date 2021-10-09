import { useState, useEffect } from 'react'

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

export const useViewport = () => {
  const [windowDimensions, setWindowDimensions] = useState({ height, width })

  const deriveWindowDimensions = () => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    setWindowDimensions({ height, width })
  }

  useEffect(() => {
    deriveWindowDimensions()
    window.addEventListener('resize', deriveWindowDimensions)

    return () => {
      window.removeEventListener('resize', deriveWindowDimensions)
    }
  }, [])

  return [windowDimensions]
}
