import { useMovieContext } from "../context/movieContext";
import MovieCard from "../components/movieCard";

function Favorites() {
  const { favorites } = useMovieContext()

  if (favorites.length > 0) {
    return <div className="movies-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-[60px]">
      {favorites.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
    </div>
  }
  return <div className="conatainer flex items-center justify-center flex-col h-[calc(100vh_-_84px)]">
    <div className="favorite-empty flex flex-col items-center">
      <h2>There are no favorite movies yet.</h2>
      <p>start adding movies to your favorites and they will appear here!</p>
    </div>
  </div>
}

export default Favorites;