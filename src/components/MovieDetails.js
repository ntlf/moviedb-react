import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const MovieDetails = ({ movie, wiki }) => (
  <div>
    {movie.id &&
      <div>
        {movie.poster_path && <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />}
        <Typography type="headline" component="h2">
          {movie.title}
        </Typography>
        <Typography component="p">
          {wiki.extract}
        </Typography>

        <div>
          {wiki.pageid && <a target="_blank" rel="noopener noreferrer" href={`http://en.wikipedia.org/?curid=${wiki.pageid}`}>
            Wikipedia
          </a>}
          &nbsp;
          {movie.imdb_id && <a target="_blank" rel="noopener noreferrer" href={`http://www.imdb.com/title/${movie.imdb_id}`}>
            IMDb
          </a>}
        </div>
      </div>
    }
  </div>
)

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    imdb_id: PropTypes.string
  }).isRequired,
  wiki: PropTypes.shape({
    pageid: PropTypes.number,
    extract: PropTypes.string
  }).isRequired
}

export default MovieDetails
