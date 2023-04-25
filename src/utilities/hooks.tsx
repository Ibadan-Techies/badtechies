import * as React from 'react'

const { useState, useEffect } = React
export function useWindowSize() {
  // initialize state with undefined if window is not present
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number
    height: undefined | number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler called on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = Number(windowSize.width) < 625 ? true : false
  const isTablet = Number(windowSize.width) > 770 ? true : false
  const isDesktop = Number(windowSize.width) > 1024 ? true : false

  return { windowSize, isMobile, isTablet, isDesktop }
}
