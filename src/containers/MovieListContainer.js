import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieList from '../components/MovieList'
import { fetchMovieDetails } from '../actions'

class MovieListContainer extends Component {
  render() {
    const { movies, isFetching, onMovieClick } = this.props

    return (
      <div className="MovieListContainer">
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && movies.length === 0 && <h2>Nothing to show.</h2>}
        {!isFetching && movies.length !== 0 && <MovieList movies={movies} onMovieClick={onMovieClick} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { movies, isFetching } = state.moviesByTitle

  return {
    isFetching,
    movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMovieClick: (id, title) => {
      dispatch(fetchMovieDetails(id, title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
