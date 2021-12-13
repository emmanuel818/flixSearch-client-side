import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Card, Nav, Navbar, } from 'react-bootstrap';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authetication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Container fluid className="login-view">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Flix-Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="home-page">
            <Nav.Link href="#Login">Profile</Nav.Link>
            <Nav.Link href="Profile">Update Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="loginPage">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Welcome Please Log-In</Card.Title>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
}; 