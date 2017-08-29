import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import List from 'material-ui/List'

const MovieList = ({ movies, onMovieClick }) => (
  <List>
    {movies.map(movie => (
      <Movie key={movie.id} title={movie.title} onClick={() => onMovieClick(movie.id, movie.title)} />
    ))}
  </List>
)

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired
}

export default MovieList
