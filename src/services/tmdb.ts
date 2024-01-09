import axios from 'axios'
import { ResponseTmdbTrending } from '../types/tmdb'

export function theMovieTrendingApi({
  timeWindow
}: {
  timeWindow: 'day' | 'week'
}): ResponseTmdbTrending | null {
  const encodeURL = encodeURI(
    `https://api.themoviedb.org/3/trending/all/${timeWindow}`
  )

  if (!timeWindow) {
    return null
  }

  return axios
    .get(encodeURL, {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWIwZTZiNThjYTI2MWM5YjBhZWM4N2EyZjIwYzI2MyIsInN1YiI6IjY1ODRlY2I1OThmMWYxNTI2MzBhM2VmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BkIks-LsV0JDCI7wCW3anw205xGbEsmhihrGLKWQPJo'
      }
    })
    .then(async ({ data }: { data: ResponseTmdbTrending }) => {
      return data
    })
}
