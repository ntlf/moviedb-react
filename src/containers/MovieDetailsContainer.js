import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieDetails from '../components/MovieDetails'

class MovieDetailsContainer extends Component {
  render() {
    const { isFetching, movie, wiki } = this.props

    return (
      <div className="MovieDetailsContainer">
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && <MovieDetails movie={movie} wiki={wiki} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { isFetching, movie, wiki } = state.movieDetails

  return {
    isFetching,
    movie,
    wiki
  }
}

export default connect(mapStateToProps)(MovieDetailsContainer)
