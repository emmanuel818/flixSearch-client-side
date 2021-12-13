// Requirement for creating a component. Imports React into the file
import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';



//export keyword exposes the MainView component. Makes it available for use 
export class MainView extends React.Component {

  // React uses the constructor method to create the component.
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }

  componentDidMount() {
    axios.get('https://flix-search-2021.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  handleRegistration(register) {
    this.setState({
      register,
    });
  }

  //This function returns the visual representation of the component, renders what will be displayed on screen
  render() {
    const { movies, selectedMovie, user, register } = this.state;

    if (!register) return <RegistrationView handleRegistration={(register) => this.handleRegistration(register)} />;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />))}
      </div>
    );
  }
}