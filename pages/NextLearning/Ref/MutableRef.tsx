import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
  const [Timer, setTimer] = useState(0)
  const inputValRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (inputValRef.current) window.clearInterval(inputValRef.current)
  }
  useEffect(() => {
    inputValRef.current = window.setInterval(() => {
      setTimer((Timer) => Timer + 1)
    }, 1000)

    return () => {
      stopTimer()
    }
  }, [])
  return (
    <div>
      Hooks - {Timer} -

      <button onClick={() => stopTimer()}>Stop TImer</button>
    </div>
  )
}

export default MutableRef