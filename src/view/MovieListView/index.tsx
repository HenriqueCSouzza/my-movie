import Card from '@/components/Card'
import Container from './components/Container'
import TrendingButton from './components/TrendingButton'

export default function MovieListView() {
  return (
    <Container>
      <div className="flex flex-row items-center justify-start gap-4 pt-7 px-10">
        <h2 className="font-semibold text-2xl">Tendências</h2>
        <TrendingButton />
      </div>
      <div className="py-5 max-w-maxPrimaryPageWidth w-full min-h-85 overflow-x-scroll overflow-y-hidden transition-height duration-5 ease-linear flex gap-4 ">
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
        <Card
          title="teste"
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmGw8DOpH856QjhCfetSK9yzI5.jpg"
        />
      </div>
    </Container>
  )
}
