import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
    <div className="movie-card">
      <img className="movie-card-image" src={movie.imagePath} alt="Movie Poster" />
      <div className="movie-card-body">
        <h4 className=".movie-card-title">{movie.title}</h4>
        <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
        <p className="movie-card-storyline">{movie.storyline}</p>
      </div>
      <div>
        <Rating key={movie.title} rating={movie.rating} />
      </div>
    </div>
    );
  }
}
MovieCard.PropTypes = { movie: PropTypes.oneOfType([PropTypes.object]).isRequired };
export default MovieCard;
