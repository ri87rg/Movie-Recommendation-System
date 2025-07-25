import MovieCard from "../components/movieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from '../services/api.js'

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        // here we don't need to setError(null) because it will run once, with the first render only
        // so the error value is initially null
        // the same goes for `${loading}` value
      }
      catch (err) {
        console.log(err)
        setError("Failed to load movies...")
      }
      finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

    async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) location.reload()
    if(loading) return
    
    setLoading(true)
    
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    }
    catch (err) {
      console.log(err)
      setError("Failed to load...")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home conatainer flex items-center justify-center flex-col">
      <form onSubmit={handleSearch}>
        <input
          className="Search-field my-12 p-3 w-[8rem] sm:w-[12rem] md:w-[20rem] lg:w-[28rem]  bg-[#474747] rounded-[4px]  outline-0 outline-white focus:outline-1"
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="Search-btn ml-8 p-2 w-[100px] bg-[#e4171f] rounded-[4px]" type="submit">
          Search
        </button>
      </form>

    {error && <div>{error}</div>}

    {loading == true ? <div>Loading...</div> : (
      <div className="movies-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    )}
    </div>
  );
}

export default Home;
