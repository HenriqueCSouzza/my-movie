import { SearchContextProvider } from './context/SearchContext'
import SearchListView from '@/view/SearchListView'

export default function Search() {
  return (
    <SearchContextProvider>
      <main className="w-full flex flex-col items-center justify-center">
        <SearchListView />
      </main>
    </SearchContextProvider>
  )
}
