
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://flix-search-2021.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); //the second argument '_self' is necessary so that the page will opne in the current tab
      })
      .catch(e => {
        console.log('error registering user')
      });
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Card.Body>
          <Card style={{ marginTop: 100, marginBottom: 50, width: 500, padding: 20 }}>
            <Card.Title style={{ textAlign: 'center' }}>Please Register</Card.Title>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
            </Form>
          </Card>
        </Card.Body>
        <Col></Col>
      </Row>
    </Container>

  );
}

RegistrationView.propTypes = {
  registration: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.date,
  }),
};