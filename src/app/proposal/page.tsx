'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Proposal = () => {
  const router = useRouter()

  //   const handleYes = async () => {
  //     const data = { response: 'yes' }
  //     try {
  //       await fetch('/api/responseEmail', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       })
  //       router.push('/response-page')
  //     } catch (error) {
  //       return
  //     }
  //   }
  //   const handleNo = async () => {
  //     const data = { response: 'No' }
  //     try {
  //       await fetch('/api/estimate-request', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       })
  //       router.push('/sad')
  //     } catch (error) {
  //       return
  //     }
  //   }
  return (
    <div className='text-[15px] h-screen justify-center flex flex-col items-center text-center'>
      <div className='flex justify-center '>
        <img alt='' src='/rose.svg' />
      </div>
      <p>
        She that have chooped out of my{' '}
        <span className='text-secondary font-medium'>heart</span>💗
      </p>
      <p>
        My <span className='text-secondary font-medium'>Apple</span>🍅
      </p>
      <p>My Nadine🙎</p>
      <p>My Adele🎤</p>

      <h2 className='mt-4 text-xl font-medium'>
        JACHIMMA ANIKWE is my{' '}
        <span className='text-secondary font-medium'>Val</span>
      </h2>

      {/* <div className='flex gap-4 mt-5'>
        <button
          onClick={handleNo}
          className='bg-secondary text-white outline-none px-4 py-3 rounded-md border border-solid shadow-xl'
        >
          NO
        </button>
        <button
          onClick={handleYes}
          className='outline-none px-4 py-3 rounded-md border border-solid shadow-xl'
        >
          YES
        </button>
      </div> */}
    </div>
  )
}

export default Proposal
