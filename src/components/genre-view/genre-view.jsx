import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardGroup, } from 'react-bootstrap';

export function GenreView({ genre, onBackClick }) {
  return (
    <Card border='primary' style={{ marginTop: 100 }}>
      <CardGroup>
        <Card.Title>{genre.Name}</Card.Title>
        <Card.Text>{genre.Description}</Card.Text>
        <Button onClick={() => onBackClick()}>Back</Button>
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