import { useContext } from 'react'
import Card from '@/components/Card'
import Container from './components/Container'
import TrendingButton from './components/TrendingButton'
import LinearProgress from '@/components/LinearProgress'
import { useQuery } from '@tanstack/react-query'
import { theMovieTrendingApi } from '@/services/tmdb'
import movieListContext, { MovieListContext } from './context/MovieListContext'
import { convertToLink } from '@/utils/convertUrl'

export function MovieListView() {
  const { timeWindow } = useContext(movieListContext)
  const { data, isLoading: loading } = useQuery({
    queryKey: ['trending', timeWindow],
    queryFn: ({ queryKey }) =>
      theMovieTrendingApi({ timeWindow: queryKey[1] as 'day' | 'week' }),
    enabled: !!timeWindow
  })

  return (
    <Container>
      {loading ? <LinearProgress /> : null}
      <div className="flex flex-row items-center justify-start gap-4 pt-7 px-10">
        <h2 className="font-semibold text-2xl">Tendências</h2>
        <TrendingButton />
      </div>
      <div className="py-5 max-w-maxPrimaryPageWidth w-full min-h-85 overflow-x-scroll overflow-y-hidden transition-height duration-5 ease-linear flex gap-4 ">
        {data?.results.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title || movie.name}
            img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            releaseDate={movie.release_date}
            url={`/movie/${convertToLink({
              name: movie.name,
              title: movie.title,
              id: movie.id
            })}`}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </Container>
  )
}

export default function ContextMovieListContainer() {
  return (
    <MovieListContext>
      <MovieListView />
    </MovieListContext>
  )
}
