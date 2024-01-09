'use client'
import { useContext } from 'react'
import movieListContext from '../../context/MovieListContext'

export default function TrendingButton() {
  const { timeWindow, setTimeWindow } = useContext(movieListContext)

  const selectBtn = 'bg-tmdbDarkBlue  text-lime-200'

  const handleButtonClick = (buttonName: 'day' | 'week') => {
    setTimeWindow(buttonName)
  }

  return (
    <div className="border border-tmdbDarkBlue bg-white rounded-3xl h-full">
      <button
        onClick={() => handleButtonClick('day')}
        className={`px-5 py-1 rounded-3xl h-7 transition-colors duration-300 ${
          timeWindow === 'day' ? selectBtn : ''
        }`}
      >
        Hoje
      </button>
      <button
        onClick={() => handleButtonClick('week')}
        className={`px-5 py-1 rounded-3xl h-7 transition-colors duration-300 ${
          timeWindow === 'week' ? selectBtn : ''
        }`}
      >
        Nesta Semana
      </button>
    </div>
  )
}
