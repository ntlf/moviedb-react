import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import TextField from 'material-ui/TextField'

const SearchMovie = ({ dispatch }) => {
  let input

  return (
    <div className="SearchMovie">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(fetchMovies(input.value))
        }}
      >
        <TextField
          inputRef={(node) => {
            input = node
          }}
          label="Movie title"
        />
      </form>
    </div>
  )
}

export default connect()(SearchMovie)
