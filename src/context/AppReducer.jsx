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

    // rating case
    case 'GET_VOTE_COUNT':
      return {
        ...state,
        rating: [action.payload, ...state.rating],
      };

    case 'HANDLE_LIKE':
      return {
        ...state,
        rating: state.rating.find(
          (movie) => (movie.vote_count = movie.vote_count + action.payload)
        ),

        // // RETURNS EVERY COUNT + 1
        // rating: [
        //   ...state.rating.map((movie) => movie.vote_count + action.payload),
        // ],
      };
    case 'HANDLE_DISLIKE':
      return {
        ...state,
        rating: state.rating.find(
          (movie) => (movie.vote_count = movie.vote_count + action.payload)
        ),

        // // RETURNS EVERY COUNT + 1
        // rating: [
        //   ...state.rating.map((movie) => movie.vote_count + action.payload),
        // ],
      };

    default:
      return state;
  }
}
