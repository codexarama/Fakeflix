import { createContext, useReducer, useEffect, useState } from 'react';
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

  function getVoteCount(movie) {
    dispatch({
      type: 'GET_VOTE_COUNT',
      payload: {
        id: movie.id,
        name: movie?.title || movie?.name || movie?.original_title,
        vote_count: movie.vote_count,
      },
    });
  }

  const [status, setStatus] = useState(null);

  const handleClickLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      if (status==='dislike') {
        dispatch({
          type: 'HANDLE_DISLIKE',
          payload: -1,
        })
      }
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }

  const handleClickDislike = () => {
    if (status === 'dislike') {
      setStatus(null);
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: -1,
      });
    } else {
      setStatus('dislike');
      if (status === 'like') {
        dispatch({
          type: 'HANDLE_LIKE',
          payload: -1,
        });
      }
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: -1,
      });
    }
  };

  // VALUES
  const value = {
    watchList,
    addMovieToWatchList,
    removeMovieFromWatchList,
    rating,
    getVoteCount,
    handleClickLike,
    handleClickDislike,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
