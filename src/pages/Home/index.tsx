import Hero from "@/components/Hero";
import Search from "@/components/Search";
import MovieListView from "@/view/MovieListView";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Hero>
        <Search />
      </Hero>
      <MovieListView />
    </main>
  );
}
