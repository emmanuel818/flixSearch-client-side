import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProfileView({ user, setUser, movies, onLoggedOut, onBackClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.handleRegistration(username);
  };

  axios.put('https://flix-search-2021.herokuapp.com/users/${user.Username}', {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  }, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      console.log(response.data);
      setUser(response.data)
      window.open('/', '_self'); //the second argument '_self' is necessary so that the page will opne in the current tab
    })
    .catch(e => {
      console.log('error updating user')
    });

  const handleDelete = () => {
    axios.delete('https://flix-search-2021.herokuapp.com/users/${user.Username}', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log(response.data);
        onLoggedOut()
      })
      .catch(err => {
        console.error(err)
      });
  }
}




