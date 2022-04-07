import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  watchList: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export default function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    // localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  // const [vote, setVote] = useState(0);
  // const [hasVote, setHasVote] = useState(false);

  // const handleVote = (status) => {
  //   if (status === 'add') {
  //     setVote(vote + 1);
  //     setHasVote(!hasVote);
  //     if (status === 'add' && hasVote === true) setVote(vote - 1);
  //   }
  //   if (status === 'remove') {
  //     setVote(vote - 1);
  //     setHasVote(!hasVote);
  //     if (status === 'remove' && hasVote === true) setVote(vote + 1);
  //   }
  // }

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        addMovieToWatchList,
        removeMovieFromWatchList,
        // watched: state.watched,

        // vote,
        // handleVote,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
