import React from 'react';
import { Navbar, Container, Nav, Button, } from 'react-bootstrap';

export function Menu({ user, movies }) {
  //Sign out method
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }
  //Token Method
  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className='navbar-logo'>Flix Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navabr-nav">
          {isAuth() && (
            <Nav.Link href="/">Movies</Nav.Link>
          )}
          {isAuth() && (
            <Nav.Link href={`/users/${user}`}>My Profile</Nav.Link>
          )}
          <Nav className="ml-auto">
            {isAuth() && (
              <Nav.Link>{user}</Nav.Link>
            )}
            {isAuth() && (
              <Button variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
            )}
            {!isAuth() && (
              <Nav.Link href="/">Sign-In</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href="/register">Sign-up</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}