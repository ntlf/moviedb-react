import { RECEIVE_MOVIES, REQUEST_MOVIES } from '../actions/types'

const moviesByTitle = (state = {
  isFetching: false,
  movies: []
}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        movies: action.movies
      }
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state
  }
}

export default moviesByTitle
