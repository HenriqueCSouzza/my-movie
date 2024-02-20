import { createContext, useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const searchContext = createContext<{
  search?: string | null
  setQueryString?: (text: string) => void
}>({
  search: ''
})

export default searchContext

export function SearchContextProvider({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )
  console.log(queryParams.get('query'))

  const [search, setSearch] = useState<string | null | undefined>(
    queryParams.get('query')
  )

  const setQueryString = useCallback(
    (text: string) => {
      queryParams.set('query', text)
      setSearch(text)
      navigate(`${location.pathname}?${queryParams.toString()}`)
    },
    [location.pathname, navigate, queryParams]
  )

  const valueMemo = useMemo<{
    search?: string | null
    setQueryString: (text: string) => void
  }>(() => ({ search, setQueryString }), [search, setQueryString])

  return (
    <searchContext.Provider value={valueMemo}>
      {children}
    </searchContext.Provider>
  )
}
