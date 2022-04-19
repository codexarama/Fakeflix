import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  watchList: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
  rating: localStorage.getItem('rating')
    ? JSON.parse(localStorage.getItem('rating'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { watchList, rating } = state;

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    localStorage.setItem('rating', JSON.stringify(state.rating));
  }, [state]);

  // ACTIONS
  function addMovieToWatchList(movie) {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  }

  function removeMovieFromWatchList(id) {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  }

  function incrementRating(movie) {
    dispatch({
      type: 'INCREMENT_RATING',
      payload: {
        id: movie.id,
        name: movie?.title || movie?.name || movie?.original_title,
        vote_count: movie.vote_count + 1,
      },
    });
  }

  function decrementRating(movie) {
    dispatch({
      type: 'DECREMENT_RATING',
      payload: {
        id: movie.id,
        name: movie?.title || movie?.name || movie?.original_title,
        vote_count: movie.vote_count - 1,
      },
    });
  }

  function removeVoteFromRating(id) {
    dispatch({ type: 'REMOVE_VOTE_FROM_RATING', payload: id });
  }

  // VALUES
  const value = {
    watchList,
    addMovieToWatchList,
    removeMovieFromWatchList,
    rating,
    incrementRating,
    decrementRating,
    removeVoteFromRating
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
