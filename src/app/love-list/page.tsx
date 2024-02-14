'use client'
import { loveList } from '@/lib/data'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const LoveList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const router = useRouter()
  const handleForwardClick = () => {
    if (currentIndex === loveList.length - 1) {
      return
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 12000)
  }, [])
  const handleBackwardClick = () => {
    if (currentIndex === 0) {
      return
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center py-10 max-w-[580px] mx-auto px-10'>
      <h1 className='mb-10 text-center'>
        Hey! baby I just want you to know 💓
      </h1>

      <p className='text-center'>{loveList[currentIndex].list}</p>
      <div className='mt-10 flex justify-between items-center'>
        <img
          src='arrowLeft.svg'
          alt=''
          className={` ${
            currentIndex === 0 ? 'invisible' : 'visible'
          } cursor-pointer`}
          onClick={handleBackwardClick}
        />
        <img
          src='arrowRight.svg'
          alt=''
          className={`${
            currentIndex === loveList.length - 1 ? 'invisible' : 'visible'
          }  cursor-pointer`}
          onClick={handleForwardClick}
        />
      </div>

      {showButton && (
        <div className='flex justify-center'>
          <button
            onClick={() => router.push('/memoryLane')}
            className='shadow-xl mt-5 px-2 py-3 border border-solid rounded-xl outline-none w-fit hover:-translate-y-2 duration-700'
          >
            Ready to walk down memory lane?
          </button>
        </div>
      )}
    </div>
  )
}

export default LoveList
