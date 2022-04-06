export default function AppReducer(state, action) {
  switch (action.type) {
      case "ADD_MOVIE_TO_WATCHLIST" :
          return {
              ...state,
              watchList: [action.payload, ...state.watchList]
          }
      case "REMOVE_MOVIE_FROM_WATCHLIST" :
          return {
              ...state,
              watchList: state.watchList.filter(movie => movie.id !== action.payload)
          }
    default:
      return state;
  }
};

///////////////////////////////////////////////////////
// export default function AppReducer(state, action) {
//     switch (action.type) {
//         case "ADD_MOVIE_TO_WATCHLIST" :
//             return {
//                 ...state,
//                 watchList: [action.payload, ...state.watchList]
//             }
//         case "REMOVE_MOVIE_FROM_WATCHLIST" :
//             return {
//                 ...state,
//                 watchList: state.watchList.filter(movie => movie.id !== action.payload)
//             }
//         case "ADD_VOTE_TO_MOVIE" :
//             return {
//                 ...state,
//                 rating: [action.payload, ...state.rating]
//             }
//         case "REMOVE_VOTE_FROM_MOVIE" :
//             return {
//                 ...state,
//                 rating: state.rating.filter(movie => movie.id !== action.payload)
//             }
//       default:
//         return state;
//     }
//   };
