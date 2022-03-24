export const {REACT_APP_API_KEY} = process.env;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/original/';
export const CREDIT_URL_START = `${BASE_URL}/movie/`
export const CREDIT_URL_END = `/credits?api_key=${REACT_APP_API_KEY}&language=en-US`

// export let {MOVIE_ID} = ""

const requests = {
  // fetchBest: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&primary_release_year=2021&sort_by=vote_average.desc`,
  // fetchPopular: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${REACT_APP_API_KEY}&language=en-US&with_network=213`,
  fetchTopRatedMovie: `${BASE_URL}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchTopRatedTvShow: `${BASE_URL}/tv/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchSciFiMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=878`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=16`,
  fetchMysteryMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=9648`,
  fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=18`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=99`,
  // credits : `${BASE_URL}/movie/${MOVIE_ID}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`,
  search : `${BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=`
};

export default requests;
