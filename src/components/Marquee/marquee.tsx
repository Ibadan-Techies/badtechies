/**
 * This peace of code is an extension of Reactjs.org community gallery
 * but extended by Kelvinsekx.
 * This is code is attributed to Kelvinsekx, The React Team and Ibadan Techies Club.
 *
 * If you will ever use this code, attribute the original owners mentioned as attributes above
 */

// TO DO!!
// Make this an interface so that there are exposing parameters to
// to use this.

import * as React from 'react'
import clsx from 'clsx'

const { useRef, useState, memo, useEffect } = React

export function IBTCMarquee({
  images,
  reverse,
}: {
  images: string[]
  reverse?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const [shouldPlay, setShouldPlay] = useState(false)

  /**
   * check if this component is at the root floor of the browser
   * If yes, resume the scroll animation, else suspend it
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting)
        })
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    )
    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  }, [])

  /**
   * some users could scroll down quicker than 20 seconds that we anticipate,
   * in that case, we would keep track of how quick they are moving, and set image
   * load quicker based on that.
   */
  const [isLazy, setIsLazy] = useState(true)

  useEffect(() => {
    if (!isLazy) {
      return
    }
    const rootVertical = Number(window.innerHeight) * 2.5
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLazy(false)
          }
        })
      },
      {
        root: null,
        rootMargin: `${rootVertical}px 0px`,
      }
    )
    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  }, [isLazy])

  /**
   * after this component mounts, wait for 20secs then before loading the images
   * */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLazy(false)
    }, 20 * 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className={`w-full py-6 lg:py-12 whitespace-nowrap flex flex-row ${
          reverse
            ? 'animate-marqueeReverse lg:animate-large-marqueeReverse'
            : 'animate-marquee lg:animate-large-marquee'
        }`}
        style={{
          animationPlayState: shouldPlay ? 'running' : 'paused',
        }}
      >
        <CommunityImages images={images} isLazy={isLazy} />
      </div>
      <div
        aria-hidden="true"
        className={`w-full absolute top-0 py-6 lg:py-12 whitespace-nowrap flex flex-row ${
          reverse
            ? 'animate-marqueeReverse2 lg:animate-large-marqueeReverse2'
            : 'animate-marquee2 lg:animate-large-marquee2'
        }`}
        style={{
          animationPlayState: shouldPlay ? 'running' : 'paused',
        }}
      >
        <CommunityImages images={images} isLazy={isLazy} />
      </div>
    </div>
  )
}

const CommunityImages = memo(function Images({
  isLazy,
  images,
}: {
  isLazy: boolean
  images: string[]
}) {
  return (
    <>
      {images.map((src, i) => (
        <div
          key={i}
          className={clsx(
            `group flex flex-col items-center justify-center px-5 min-w-[55%] lg:min-w-[25%] rounded-2xl relative`
          )}
        >
          <div
            className={clsx(
              'h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300',
              i % 2 === 0
                ? 'rotate-2 group-hover:rotate-[-2deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl'
                : 'group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-1deg]'
            )}
          >
            <img
              loading={isLazy ? 'lazy' : 'eager'}
              src={src}
              alt={'alt'}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-ibtc-blue-10"
            />
          </div>
        </div>
      ))}
    </>
  )
})
