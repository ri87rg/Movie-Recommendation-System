import { useMovieContext } from "../context/movieContext.jsx"

function MovieCard({movie}) {
    const {isFavorite, addFavorite, removeFavorite} = useMovieContext()
    const favorited = isFavorite(movie.id)

    function onFavoriteClick() {
        if (favorited) removeFavorite(movie.id)
        else addFavorite(movie)
    }

  return ( 
    <div className="movie-card  bg-[#1a1a1a] w-fit h-fit rounded-[8px]">
      <div className="movie-poster relative w-fit h-fit group">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[230px]  rounded-t-[8px]"/>
        <div className="movie-overlay 
        absolute right-0 top-0 p-2 
        invisible opacity-0 
        group-hover:visible group-hover:opacity-100 
        transition-opacity duration-200">
          <button className="rounded-full bg-[#1a1a1a91] hover:bg-sky-700 p-1 border-2 border-transparent focus:border-white " onClick={onFavoriteClick}>
            {favorited ? '❤️' : '🤍'}
            </button>
        </div>
      </div>
      <div className="movie-info p-2 pb-6 group">
        <h3 className="movie-title mb-2 max-w-[214px] max-h-[24px] overflow-hidden group-hover:overflow-auto">{movie.title}</h3>
        <p className="movie-date text-[12px] text-[#717171]">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}


export default MovieCard;