
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Row, Col, } from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authetication */
    props.handleRegistration(username);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  registration: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
  handleRegistration: PropTypes.func.isRequired,
};