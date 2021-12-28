import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
import './genre-view.scss';

export function GenreView({ genre, onBackClick }) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Card className="genre-card" border='primary' style={{ marginTop: 50, marginBottom: 30, height: 220, width: 500 }}>
          <Card.Body>
            <Card.Title className="genre-title">{genre.Name}</Card.Title>
            <Card.Text style={{ marginRight: 10, marginLeft: 10 }}>{genre.Description}</Card.Text>
            <Button onClick={() => onBackClick()}>Back</Button>
          </Card.Body>
        </Card>
        <Col></Col>
      </Row>
    </Container>
  )
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
  onBackClick: PropTypes.func.isRequired
}