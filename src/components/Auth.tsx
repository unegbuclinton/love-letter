import { useEffect, useRef, useState } from 'react'
import Input from './Input'
import { TypeAnimation } from 'react-type-animation'

const Auth = () => {
  const [showHint, setShowHint] = useState(false)

  const [showInput, setInput] = useState(false)
  const onHandleHint = () => {
    setShowHint(true)
  }

  const hintRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hintRef.current && !hintRef.current.contains(event.target as Node)) {
        setShowHint(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setInput(true)
    }, 50000)
  }, [])

  return (
    <div className='relative h-screen max-w-[650px] w-full px-4 py-6 text-base'>
      <img src='/next.svg' alt='letter' className='absolute left-10 top-10' />
      <img src='/next.svg' alt='letter' className='absolute right-10 top-10' />
      <div className='flex justify-center  mb-5'>
        <img
          src='/apple.JPG'
          alt=''
          className='relative rounded-full w-[150px] h-[150px] object-cover z-20'
        />
      </div>
      <h2 className='text-xl font-semibold mb-4'>
        Hey <span className='text-[#a649f5]'>Baby!</span>
      </h2>

      <div className='h-[60px]'>
        <TypeAnimation
          sequence={[
            'Thinking back to each of our dates brings a rush of warmth to my heart.',
            4000,
            "  Do you remember our ride in a Mo-cart, how we laughed and talked for hours, lost in each other's company?",
            4000,
            " Do you remmeber our first kiss? How we stared into eachother's eye till you can wait no longer, it felt like time stopped just for us.",
            4000,
            "Let's take a drive 🚗... but you'll need a password",
          ]}
          wrapper='span'
          speed={50}
          style={{
            fontSize: '16px',
            display: 'inline-block',
          }}
        />
      </div>

      {showInput && (
        <>
          <Input />

          <div className='relative mx-auto '>
            <p
              className={`absolute max-w-[500px] leading-6 border border-solid px-3 py-2 hint -top-[10.5rem] -left-1 bg-white shadow-card rounded-md ${
                showHint ? 'opacity-100' : 'opacity-0'
              } transition-all duration-200`}
            >
              Look for the panda, here he is Vinnie the panda. If you don&apos;t
              see this panda better drop it you are not buying anything......
            </p>
            <p
              ref={hintRef}
              onClick={onHandleHint}
              className='mt-2 text-xs cursor-pointer hint p-2 border border-solid rounded-md w-fit'
            >
              Hint
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Auth
