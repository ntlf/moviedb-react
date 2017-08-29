import { API_KEY } from '../constants'
import { REQUEST_MOVIES, REQUEST_MOVIE_DETAILS, RECEIVE_MOVIES, RECEIVE_MOVIE_DETAILS } from './types'


function requestMovies() {
  return {
    type: REQUEST_MOVIES
  }
}

function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json.results.map(movie => movie)
  }
}

function requestMovieDetails() {
  return {
    type: REQUEST_MOVIE_DETAILS
  }
}

function receiveMovieDetails(json) {
  return {
    type: RECEIVE_MOVIE_DETAILS,
    details: json
  }
}

export function fetchMovies(movieTitle) {
  return (dispatch) => {
    dispatch(requestMovies())
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieTitle}`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(json)))
  }
}

export function fetchMovieDetails(id, moveTitle) {
  return (dispatch) => {
    dispatch(requestMovieDetails())

    const movie = fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    ).then(response => response.json())

    const wiki = fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exintro=&explaintext=&format=json&titles=${moveTitle}`
    ).then(response => response.json())

    const combinedData = {
      movie: {},
      wiki: {}
    }

    Promise.all([movie, wiki]).then((results) => {
      combinedData.movie = results[0]

      const pageId = Object.keys(results[1].query.pages)[0]
      combinedData.wiki = results[1].query.pages[pageId]

      dispatch(receiveMovieDetails(combinedData))
    })
  }
}
