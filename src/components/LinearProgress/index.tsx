import React, { useState, useEffect } from 'react'

interface LinearProgressProps {
  duration?: number
}

const LinearProgress: React.FC<LinearProgressProps> = ({ duration = 1000 }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : prevProgress
      )
    }, duration / 100)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <div className="w-full h-1 overflow-hidden">
      <div className={`bg-blue-300 h-full`} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default LinearProgress
