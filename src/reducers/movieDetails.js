import { RECEIVE_MOVIE_DETAILS, REQUEST_MOVIE_DETAILS } from '../actions/types'

const movieDetails = (state = {
  isFetching: false,
  wiki: {},
  movie: {}
}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: false,
        wiki: action.details.wiki,
        movie: action.details.movie
      }
    case REQUEST_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state
  }
}

export default movieDetails
