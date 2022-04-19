export default function AppReducer(state, action) {
  switch (action.type) {
    // watchList cases
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
