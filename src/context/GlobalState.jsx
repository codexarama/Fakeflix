import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  watchList: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { watchList } = state;

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
  }, [state]);

  // ACTIONS
  function addMovieToWatchList(movie) {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  }

  function removeMovieFromWatchList(id) {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  }

  // VALUES
  const value = {
    watchList,
    addMovieToWatchList,
    removeMovieFromWatchList,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
