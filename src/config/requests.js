const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/original/';
export const MOVIE_ID = ""

// * use this way in real context
// export const {REACT_APP_API_KEY} = process.env;
// ! needs to be visible to get data via Netlify web editor
export const REACT_APP_API_KEY="7cd87a2a8f9768f5fe4154575d2b60bb"

const requests = {
  // fetchBest: `${BASE_URL}/discover/movie?&primary_release_year=2021&sort_by=vote_average.desc`,
  // fetchPopular: `${BASE_URL}/discover/movie?&sort_by=popularity.desc`,
  fetchTrending: `${BASE_URL}/trending/all/week?&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?&language=en-US&with_network=213`,
  fetchTopRatedMovie: `${BASE_URL}/movie/top_rated?&language=en-US`,
  fetchTopRatedTvShow: `${BASE_URL}/tv/top_rated?&language=en-US`,
  fetchSciFiMovies: `${BASE_URL}/discover/movie?&language=en-US&with_genres=878`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?&language=en-US&with_genres=16`,
  fetchMysteryMovies: `${BASE_URL}/discover/movie?&language=en-US&with_genres=9648`,
  fetchDramaMovies: `${BASE_URL}/discover/movie?&language=en-US&with_genres=18`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?&language=en-US&with_genres=99`,
  credits : `${BASE_URL}/movie/${MOVIE_ID}/credits?&language=en-US`,
  search : `${BASE_URL}/search/movie?&language=en-US&query=`
};

export default requests;
