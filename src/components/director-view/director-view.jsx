import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './director-view.scss';

export function DirectorView({ director, onBackClick }) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Card className="director-card" border='primary' style={{ marginTop: 50, marginBottom: 30, height: 260, width: 500 }}>
          <Card.Body>
            <Card.Title>{director.Name}</Card.Title>
            <Card.Text>{director.Bio}</Card.Text>
            <Button onClick={() => onBackClick()}>Back</Button>
          </Card.Body>
        </Card>
        <Col></Col>
      </Row>
    </Container>
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