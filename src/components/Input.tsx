import React, { useRef, useState } from 'react'
import { passCode } from '../lib/data'
import { useRouter } from 'next/navigation'
const Input = () => {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!isInputVisible) {
      setIsInputVisible(true)
      setTimeout(() => {
        passwordInputRef.current?.focus()
      }, 30)
      return
    }

    if (!password) {
      setErrorMessage('Enter a password')
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      return
    }

    if (passCode.includes(password)) {
      return router.push('/love-list')
    } else {
      setErrorMessage('Wrong password')
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
  }
  return (
    <div className='mt-10'>
      <form
        onSubmit={handleSubmit}
        className={`flex w-fit ${
          error ? 'border-red-400' : ''
        } border-2 border-solid transition-all ease-in-out duration-300 rounded-[4rem] relative mb-0 z-20 text-center ${
          isInputVisible
            ? 'transition-all ease-in-out duration-200 opacity-100 shadow-inputShadow phActive'
            : ''
        } `}
      >
        <input
          ref={passwordInputRef}
          type='text'
          className={`emailInput ${
            isInputVisible ? `emailInputActive` : 'hidden'
          } max-w-[190px]`}
          placeholder='Passcode'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`ctaButton ${
            isInputVisible ? `ctaButtonInputActive` : ''
          } `}
          type='submit'
        >
          Enter Password
        </button>
      </form>
      {error && (
        <div className='text-red-400 text-center mt-2 font-medium'>
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Input
