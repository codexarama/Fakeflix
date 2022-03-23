import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  watchList: [],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export default function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
