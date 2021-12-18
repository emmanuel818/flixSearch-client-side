import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function DirectorView({ movie, onBackClick }) {
  return (
    <Card border='primary'>
      <Card.Body>
        <Card.Title>{movie.Director.Name}</Card.Title>
        <Card.Text>{movie.Director.Bio}</Card.Text>
        <Link to={`/directors/:name ${movieDirector.Name}`}>
          <Button variant="link">Open</Button>
        </Link>
        <Button onBackClick={() => onBackClick()}>Back</Button>
      </Card.Body>
    </Card>
  )
}

DirectorView.propTypes = {
  movie: PropTypes.shape({
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }).isRequired
  }),
  onBackClick: PropTypes.func.isRequired
}