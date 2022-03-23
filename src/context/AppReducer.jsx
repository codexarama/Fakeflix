export default function AppReducer(state, action) {
  switch (action.type) {
      case "ADD_MOVIE_TO_WATCHLIST" :
          return {
              ...state,
              watchList: [action.payload, ...state.watchList]
          }
    default:
      return state;
  }
};
