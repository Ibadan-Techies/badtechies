import * as React from 'react'
import Image from 'next/image'
import { sources } from '../GalleryCarousel/sources'
import { TimerOptions } from 'timers'

const get_img_degree = (total: number, index: number) => {
  if (index === 0) return total + total * 1.5
  else if (index > 1 && index < total / 1.4) return total - index * 0.4
  else return index - total * 0.5
}

const get_translateX = (total: number, index: number) => {
  if (index === total - 1) return `translateX(5px) translateY(5px)`
  if (index === total - 2) return `rotate(3deg) translateX(75px)`
  if (index === 1) return `rotate(-2deg) translateX(-50px)`
  if (index === 0) return `rotate(10deg) translateX(75px)`
}

const { useState, useRef, useEffect } = React
export function StackedPhotos() {
  const [isHovering, setIsHovering] = useState(false)

  const imagesRef = useRef<
    HTMLDivElement & { lastElementChild: HTMLElement | null }
  >(null)
  const timerRef1 = useRef<ReturnType<typeof setTimeout> | string>('')
  const timerRef2 = useRef<ReturnType<typeof setTimeout> | string>('')

  const [active, setActive] = useState(false)
  const [last, setLast] = useState<DOMTokenList | null | undefined>(null)

  //   const [imageWidth, setImageWidth] = useState(false)
  //   const [imageOffset, setImageOffset] = useState(false)

  useEffect(() => {
    setLast(
      imagesRef.current ? imagesRef.current.lastElementChild?.classList : null
    )
    last?.add('slide-right')
    return () => {
      clearTimeout(timerRef1.current)
      clearTimeout(timerRef2.current)
      last?.remove('slide-right')
    }
  }, [])

  const handleOnClick = () => {
    if (!active) {
      setActive(true)
      last?.add('slide-right')

      timerRef1.current = setTimeout(function () {
        last?.remove('slide-right')
        last?.add('back')
        console.log(last)

        timerRef2.current = setTimeout(function () {
          imagesRef.current?.insertBefore(
            imagesRef.current?.lastElementChild as Node,
            imagesRef.current?.firstElementChild
          )
          last?.remove('back')
          setLast(imagesRef.current?.lastElementChild?.classList)
          setActive(false)
        }, 400)
      }, 500)
    }
  }

  const handleMouseOver = () => setIsHovering(true)
  const handleMouseOut = () => setIsHovering(false)

  const degree = (sourceLength: number, index: number) => {
    if (isHovering) return get_img_degree(sources[0].length, index) * -1
    return get_img_degree(sourceLength, index)
  }

  return (
    <div className="_9123_imageWrapper" ref={imagesRef} onClick={handleOnClick}>
      {sources[0].map((src, index) => (
        <div
          key={index}
          className="img"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            transform: isHovering
              ? get_translateX(sources[0].length, index)
              : `rotate(${degree(sources[0].length, index)}deg)`,
          }}
        >
          <Image src={src} fill alt="" className="object-cover"></Image>
        </div>
      ))}
    </div>
  )
}
