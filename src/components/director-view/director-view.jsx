import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardGroup } from 'react-bootstrap';

export function DirectorView({ director, onBackClick }) {
  return (
    <Card border='primary' style={{ marginTop: 100 }}>
      <CardGroup>
        <Card.Title>{director.Name}</Card.Title>
        <Card.Text>{director.Bio}</Card.Text>
        <Button onClick={() => onBackClick()}>Back</Button>
      </CardGroup>
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