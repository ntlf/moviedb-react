import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from 'material-ui/List'

const Movie = ({ onClick, title }) => (
  <ListItem button onClick={onClick}>
    <ListItemText primary={title} />
  </ListItem>
)

Movie.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Movie
