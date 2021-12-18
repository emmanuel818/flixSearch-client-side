import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardGroup, } from 'react-bootstrap';

export function GenreView({ movie, onBackClick }) {
  return (
    <Card border='primary'>
      <CardGroup>
        <Card.Title>{movie.Genre.Name}</Card.Title>
        <Card.Text>{movie.Genre.Bio}</Card.Text>
        <Link to={`/genres/:name ${movie.Genre.Name}`}>
          <Button variant="link">Open</Button>
        </Link>
        <Button onBackClick={() => onBackClick()}>Back</Button>
      </CardGroup>
    </Card>
  )
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
  onBackClick: PropTypes.func.isRequired
}