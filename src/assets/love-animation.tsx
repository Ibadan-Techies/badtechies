import * as React from 'react'

const { useRef, useEffect } = React

declare global {
  interface Window {
    landingAnimationLoader: any
  }
}

export default function LoveAnimationSvg() {
  const lRef = useRef(null)

  useEffect(() => {
    if (!window.landingAnimationLoader) {
      window.addEventListener('scroll', () => {
        const startY = 50
        const endY = 327

        const y = Math.min(1, Math.max(0, window.scrollY - startY) / endY)
        const pathD = interpolatePathD(y)
        //
        const path = document.getElementById('path-element')
        path?.setAttribute('d', pathD)
      })

      window.landingAnimationLoader = true
    }
  }, [])
  return (
    <svg
      ref={lRef}
      height={'inherit'}
      width={'inherit'}
      className="w-full"
      x="0px"
      y="0px"
      viewBox="4 -85 794 137"
      preserveAspectRatio="xMidYMax"
    >
      <path
        id="path-element"
        className="w-full"
        d="M 798, 59.5, C 798, 59.5, 4, 59.5, 4, 59.5, C 4, 59.5, 3.866, -47.624, 3.866, -47.624, C 3.866, -47.624, 207.00500000000002, 7.039999999999999, 402.005, 7.039999999999999, C 614.506, 7.039999999999999, 797.866, -47.624, 797.866, -47.624, C 797.866, -47.624, 798, 59.5, 798, 59.5, C 798, 59.5, 798, 59.5, 798, 59.5"
        fill="white"
      ></path>
    </svg>
  )
}

function interpolateValue<i extends number, j extends number, k extends number>(
  x: i,
  vi: j,
  vf: k
) {
  return (vf - vi) * x + vi
}

function interpolatePathD(x: number) {
  return `M ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, C ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 4, 4)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 4, 4)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, C ${interpolateValue(x, 4, 4)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 3.866, 4)}, ${interpolateValue(
    x,
    -47.624,
    49.83299999999999
  )}, ${interpolateValue(x, 3.866, 4)}, ${interpolateValue(
    x,
    -47.624,
    49.83299999999999
  )}, C ${interpolateValue(x, 3.866, 4)}, ${interpolateValue(
    x,
    -47.624,
    49.83299999999999
  )}, ${interpolateValue(x, 207.00500000000002, 206)}, ${interpolateValue(
    x,
    7.039999999999999,
    7.5
  )}, ${interpolateValue(x, 402.005, 401)}, ${interpolateValue(
    x,
    7.039999999999999,
    7.5
  )}, C ${interpolateValue(x, 614.506, 613.5)}, ${interpolateValue(
    x,
    7.039999999999999,
    7.5
  )}, ${interpolateValue(x, 797.866, 798)}, ${interpolateValue(
    x,
    -47.624,
    49.166999999999994
  )}, ${interpolateValue(x, 797.866, 798)}, ${interpolateValue(
    x,
    -47.624,
    49.166999999999994
  )}, C ${interpolateValue(x, 797.866, 798)}, ${interpolateValue(
    x,
    -47.624,
    49.166999999999994
  )}, ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, C ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 798, 798)}, ${interpolateValue(
    x,
    59.5,
    59.5
  )}, ${interpolateValue(x, 798, 798)}, ${interpolateValue(x, 59.5, 59.5)}`
}
