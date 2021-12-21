import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './movie-view.scss'

export class MovieView extends React.Component {

  addToFavs() {
    const token = localStorage.getItem("token");
    const Username = localStorage.getItem("user");


    axios.post(`https://flix-search-2021.herokuapp.com/users/${Username}/movies/${this.props.movie._id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        alert("The movie is now on your list.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }


  render() {
    const { movie, onBackClick, } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card border="primary" style={{ marginTop: 50, marginBottom: 30, height: 1000, width: 500 }}>
              <Card.Img variant="top" src={movie.ImageUrl} crossOrigin="anonymous" />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Link to={`/genres/${movie.Genre.Name}`}>
                  <Button variant="primary">Genre</Button>
                </Link>
                <Link to={`/directors/${movie.Director.Name}`}>
                  <Button variant="primary">Directors</Button>
                </Link>
                <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
                <Button variant="primary" onClick={() => { this.addToFavs(movie._id) }}>Add to Favorites</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birthyear: PropTypes.string,
      Deathyear: PropTypes.string
    }),
    Featured: PropTypes.bool
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};