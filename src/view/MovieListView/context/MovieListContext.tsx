import { createContext, useMemo, useState } from 'react'

const movieListContext = createContext<{
  timeWindow: 'day' | 'week'
  setTimeWindow: React.Dispatch<React.SetStateAction<'day' | 'week'>>
}>({
  timeWindow: 'day',
  setTimeWindow: (timeWindow) => timeWindow
})

export default movieListContext

export function MovieListContext({ children }: { children: JSX.Element }) {
  const [timeWindow, setTimeWindow] = useState<'day' | 'week'>('day')
  const valueMemo = useMemo<{
    timeWindow: 'day' | 'week'
    setTimeWindow: React.Dispatch<React.SetStateAction<'day' | 'week'>>
  }>(() => ({ timeWindow, setTimeWindow }), [timeWindow, setTimeWindow])

  return (
    <movieListContext.Provider value={valueMemo}>
      {children}
    </movieListContext.Provider>
  )
}
