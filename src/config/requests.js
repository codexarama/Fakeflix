const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING = '/trending/all/week?';

const DISCOVER_MOVIE = '/discover/movie?';
const TOP_MOVIE = '/movie/top_rated?';

// export const MOVIE_ID = '';

// get & set movie Id
export class MOVIE {
  constructor(id) {
    this.id = id;
  }

  get movieId() {
    return `${this.id}`;
  }

  // define setter
  set movieId(id) {
   this.id = id;
   return `${this.id}`;
  //  return id
  }
}

export let ID
ID = new MOVIE();

export let MOVIE_ID
// MOVIE_ID = new MOVIE();

// const CREDITS_MOVIE = `/movie/${MOVIE_ID}/credits?`
const SEARCH_MOVIE = '/search/movie?';

const DISCOVER_TV = '/discover/tv?';
const TOP_TV = '/tv/top_rated?';

const LANGUAGE_US = '&language=en-US';
const NETWORK = '&with_network=';
const GENRE = '&with_genres=';

const QUERY = '&query=';

export const IMG_URL = 'https://image.tmdb.org/t/p/original/';

// * use this way in real context
// export const {REACT_APP_API_KEY} = process.env;
// ! needs to be visible to get data via Netlify web editor
export const REACT_APP_API_KEY = '7cd87a2a8f9768f5fe4154575d2b60bb';

const requests = {
  // fetchBest: `${BASE_URL}${DISCOVER_MOVIE}&primary_release_year=2021&sort_by=vote_average.desc`,
  // fetchPopular: `${BASE_URL}${DISCOVER_MOVIE}&sort_by=popularity.desc`,
  fetchTrending: `${BASE_URL}${TRENDING}${LANGUAGE_US}`,
  fetchNetflixOriginals: `${BASE_URL}${DISCOVER_TV}${LANGUAGE_US}${NETWORK}213`,
  fetchTopRatedMovie: `${BASE_URL}${TOP_MOVIE}${LANGUAGE_US}`,
  fetchTopRatedTvShow: `${BASE_URL}${TOP_TV}${LANGUAGE_US}`,
  fetchSciFiMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}878`,
  fetchAnimationMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}16`,
  fetchMysteryMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}9648`,
  fetchDramaMovies: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}18`,
  fetchDocumentaries: `${BASE_URL}${DISCOVER_MOVIE}${LANGUAGE_US}${GENRE}99`,
  // credits: `${BASE_URL}${CREDITS_MOVIE}${LANGUAGE_US}`,
  credits: `${BASE_URL}/movie/${MOVIE_ID}/credits?${LANGUAGE_US}`,
  // credits: `${BASE_URL}/movie/${MOVIE_ID}/credits?${LANGUAGE_US}`,
  search: `${BASE_URL}${SEARCH_MOVIE}${LANGUAGE_US}${QUERY}`,
};

export default requests;
