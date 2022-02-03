const API_KEY = '7cd87a2a8f9768f5fe4154575d2b60bb';
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
  // fetchBest: `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=2021&sort_by=vote_average.desc`,
  // fetchPopular: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_network=213`,
  fetchTopRatedMovie: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTvShow: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchSciFiMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchMysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
