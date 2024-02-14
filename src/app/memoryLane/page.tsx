'use client'
import { useEffect, useRef, useState } from 'react'
import { carousel } from '@/lib/data'

const RADIUS = 750
const FLIP_RANGE = 2.5

const CarouselFlow = () => {
  const [showButton, setShowButton] = useState(false)

  const el = useRef<HTMLDivElement>(null)
  const info = useRef<HTMLDivElement>(null)

  let angleUnit: number, currentIndex: number, currentAngle: number

  // Help function to set element style transform property
  function setTransform(
    el: HTMLDivElement,
    xpos: number,
    zpos: number,
    angle: number,
    flipAngle: number
  ) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`
  }

  function target(index: number, initial: boolean = false) {
    info.current!.textContent = carousel[index].info

    // Calculate amount of angle to shift
    let deltaAngle = -(index - currentIndex) * angleUnit
    if (deltaAngle < -180) deltaAngle += 360
    else if (deltaAngle > 180) deltaAngle -= 360

    currentAngle += deltaAngle
    currentIndex = index

    // Rotate the container and flip item angle
    const cf = el.current!
    cf.style.transform = `translateZ(-1250px) rotateY(${currentAngle}deg)`

    // Flip items angle
    let fliptAngle = 90
    const items = cf.children

    // Iterate the items and apply transformation
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement
      const itemAngle = angleUnit * i
      const itemAngleRad = (itemAngle * Math.PI) / 180
      const xpos = Math.sin(itemAngleRad) * RADIUS
      const zpos = Math.cos(itemAngleRad) * RADIUS

      let deltaIndex = Math.abs(i - index)
      if (deltaIndex > cf.children.length / 2) {
        deltaIndex = cf.children.length - deltaIndex
      }
      if (deltaIndex <= FLIP_RANGE) {
        fliptAngle = deltaIndex * (90 / FLIP_RANGE)
      } else fliptAngle = 90
      setTransform(item, xpos, zpos, itemAngle, fliptAngle)
    }
  }

  useEffect(() => {
    angleUnit = 360 / carousel.length
    currentIndex = currentAngle = 0
    target(0, true)

    // Start auto-rotation interval
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carousel.length
      target(nextIndex)
    }, 6000)
    return () => clearTimeout(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowButton(true)
    }, 30000)
    return () => clearTimeout(interval)
  }, [])
  return (
    <div className='container my-4 px-4'>
      <div className='carouselflow' ref={el}>
        {carousel.map(({ img }, index) => (
          <div
            onClick={() => target(index)}
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className='carouselflow-item'
          ></div>
        ))}
      </div>
      <div
        ref={info}
        className='mx-auto mt-5  bg-white z-10 relative leading-5 text-center border border-solid border-[#E5E4E7] shadow-cards rounded-md max-w-[550px] px-2 py-4'
      ></div>

      <div
        className={`flex justify-center ${
          showButton ? 'mt-2' : '-mt-10'
        } transition-all duration-300 ease-in`}
      >
        <button className='px-3 py-2 font-semibold  rounded-lg shadow-buttonShadow'>
          Let me show you something!
        </button>
      </div>
    </div>
  )
}

export default CarouselFlow
