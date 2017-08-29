import React from 'react'
import SearchMovie from '../containers/SearchMovie'
import MovieListContainer from '../containers/MovieListContainer'
import MovieDetailsContainer from '../containers/MovieDetailsContainer'
import Header from './Header'

const App = () =>
  <div className="App">
    <Header />
    <SearchMovie />
    <div className="Results">
      <MovieListContainer />
      <MovieDetailsContainer />
    </div>
  </div>

export default App
