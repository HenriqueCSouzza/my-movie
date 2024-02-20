import axios from 'axios'
import { ResponseTmdbTrending } from '../types/tmdb'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export function theMovieTrendingApi({
  timeWindow
}: {
  timeWindow: 'day' | 'week'
}): ResponseTmdbTrending | null {
  const encodeURL = encodeURI(
    `trending/all/${timeWindow}?api_key=${import.meta.env.VITE_THE_MOVIE_KEY}`
  )

  if (!timeWindow) {
    return null
  }

  return movieApi
    .get(encodeURL)
    .then(async ({ data }: { data: ResponseTmdbTrending }) => {
      return data
    })
}

export function theMovieSearchApi({
  search,
  page = 1
}: {
  search: string
  page: number
}): ResponseTmdbTrending | null {
  const encodeURL = encodeURI(`search/movie?search=1${search}&page=${page}`)

  return movieApi
    .get(encodeURL, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_THE_MOVIE_KEY}`
      }
    })
    .then(async ({ data }: { data: ResponseTmdbTrending }) => {
      return data
    })
}
