import { useContext, useState } from 'react'
import searchContext from '@/pages/Search/context/SearchContext'
import { FaSearch } from 'react-icons/fa'

export default function SearchListView() {
  const { search } = useContext(searchContext)
  const [text, setText] = useState(search)
  console.log(search)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div className="flex">
      <div className="flex ">
        <button>
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="search"
          onChange={onInputChange}
          value={text || ''}
        />
      </div>
    </div>
  )
}
