import { combineReducers } from 'redux'
import moviesByTitle from './moviesByTitle'
import movieDetails from './movieDetails'

const rootReducer = combineReducers({
  moviesByTitle,
  movieDetails
})

export default rootReducer
