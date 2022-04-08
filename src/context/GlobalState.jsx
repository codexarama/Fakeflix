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
export default function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
  }, [state]);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        addMovieToWatchList,
        removeMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
