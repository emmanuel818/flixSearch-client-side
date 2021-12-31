import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

import "./login-view.scss";


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authetication */
    axios.post('https://flix-search-2021.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        alert('no such user')
      });
  };

  return (
    <Container className="loginPage">
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ marginTop: 100, marginBottom: 50, width: '30 rem' }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Welcome Please Log-In</Card.Title>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label className="formlabel">Username:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}


const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (username, password) = dispatch(handleSubmit(username, password))
});

/*LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};*/

export default connect(null, mapDispatchToProps)(LoginView);