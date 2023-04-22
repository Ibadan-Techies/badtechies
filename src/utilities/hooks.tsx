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

  return windowSize
}
