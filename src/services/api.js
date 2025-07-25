const API_KEY = "1fcc7ed21815a2007f1a9b65b7ec31f9"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  console.log(`Raw query: ${query}`)
  console.log(`encode uri component query: ${encodeURIComponent(query)}`)
  const data = await response.json();
  return data.results;
}