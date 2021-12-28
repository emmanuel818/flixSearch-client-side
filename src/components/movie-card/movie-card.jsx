import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, CardGroup, } from 'react-bootstrap';
//import './movie-card.scss';
import { Link } from 'react-router-dom';


export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>
        <Row>
          <Col></Col>
          <Card border='primary' className="movieCard text-center" style={{ marginTop: 50, height: 500, width: 300 }}>
            <Card.Img style={{ height: 400 }} variant="top" src={movie.ImageUrl} crossOrigin="anonymous" />
            <Card.Title style={{ marginTop: 10 }}>{movie.Title}</Card.Title>
            <Link to={`/movies/${movie._id}`}>
              <Button variant="primary">Description</Button>
            </Link>
          </Card>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};