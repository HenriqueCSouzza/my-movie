'use client'
import { useState } from 'react'

export default function TrendingButton() {
  const [selectedButton, setSelectedButton] = useState<string>('')

  const selectBtn = 'bg-tmdbDarkBlue  text-lime-200'

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName)
  }

  return (
    <div className="border border-tmdbDarkBlue bg-white rounded-3xl h-full">
      <button
        onClick={() => handleButtonClick('hoje')}
        className={`px-5 py-1 rounded-3xl h-7 transition-colors duration-300 ${
          selectedButton === 'hoje' ? selectBtn : ''
        }`}
      >
        Hoje
      </button>
      <button
        onClick={() => handleButtonClick('semana')}
        className={`px-5 py-1 rounded-3xl h-7 transition-colors duration-300 ${
          selectedButton === 'semana' ? selectBtn : ''
        }`}
      >
        Nesta Semana
      </button>
    </div>
  )
}
