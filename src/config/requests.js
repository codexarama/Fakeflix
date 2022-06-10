const BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_MOVIE = '/discover/movie?'
const DISCOVER_TV = '/discover/tv?'
const LANGUAGE_US = '&language=en-US';
const GENRE = '&with_genres='
export const IMG_URL = 'https://image.tmdb.org/t/p/original/';
export const MOVIE_ID = '';

// * use this way in real context
// export const {REACT_APP_API_KEY} = process.env;
// ! needs to be visible to get data via Netlify web editor
export const REACT_APP_API_KEY = '7cd87a2a8f9768f5fe4154575d2b60bb';

const requests = {
  // fetchBest: `${BASE_URL}${DISCOVER_MOVIE}&primary_release_year=2021&sort_by=vote_average.desc`,
  // fetchPopular: `${BASE_URL}${DISCOVER_MOVIE}&sort_by=popularity.desc`,
  fetchTrending: `${BASE_URL}/trending/all/week?${LANGUAGE_US}`,
  fetchNetflixOriginals: `${BASE_URL}${DISCOVER_TV}${LANGUAGE_US}&with_network=213`,
  fetchTopRatedMovie: `${BASE_URL}/movie/top_rated?${LANGUAGE_US}`,
  fetchTopRatedTvShow: `${BASE_URL}/tv/top_rated?${LANGUAGE_US}`,
  fetchSciFiMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}878`,
  fetchAnimationMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}16`,
  fetchMysteryMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}9648`,
  fetchDramaMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}18`,
  fetchDocumentaries: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}99`,
  credits: `${BASE_URL}/movie/${MOVIE_ID}/credits?${LANGUAGE_US}`,
  search: `${BASE_URL}/search/movie?${LANGUAGE_US}&query=`,
};

export default requests;
