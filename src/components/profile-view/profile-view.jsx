import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col, Figure } from "react-bootstrap";
import './profile-view.scss';
import { connect } from "react-redux";
import { setUser, updateUser } from "../../actions/actions";



export class ProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  getUser = (token) => {
    const Username = localStorage.getItem("user");
    axios
      .get(`https://flix-search-2021.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Allow user to edit or update profile
  editUser = (e) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://flix-search-2021.herokuapp.com/users/${Username}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });

        localStorage.setItem("user", this.state.Username);
        const data = response.data;
        console.log(data);
        console.log(this.state.Username);
        alert("Profile is updated!");
        window.open(`/users/${Username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Deregister
  onDeleteUser() {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios.delete(`https://flix-search-2021.herokuapp.com/users/${Username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        alert("Profile has been deleted!");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open(`/`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onRemoveFavorite(_id) {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios.delete(`https://flix-search-2021.herokuapp.com/users/${Username}/movies/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        alert("Movie has been removed!");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setUsername(value) {
    this.setState({
      Username: value,
    });
    this.Username = value;
  }

  setPassword(value) {
    this.setState({
      Password: value,
    });
    this.Password = value;
  }

  setEmail(value) {
    this.setState({
      Email: value,
    });
    this.Email = value;
  }

  setBirthday(value) {
    this.setState({
      Birthday: value,
    });
    this.Birthday = value;
  }

  render() {
    const { movies } = this.props;
    const { FavoriteMovies, Email, Username } = this.state;

    return (
      <Container className="profile-view" align="center" fluid>
        <Row>
          <Col lg={4}>
            <Card className="user-profile" style={{ marginTop: 50 }}>
              <Card.Title>User Profile</Card.Title>
              <Card.Text>
                <Card.Body className="profile-container">
                  <span className="label">Username: </span>
                  <span className="value">{Username}</span>
                  <br />
                  <br />
                  <span className="label">Email: </span>
                  <span className="value">{Email}</span>
                  <br />
                  <br />
                </Card.Body>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="update-profile" style={{ marginTop: 50 }}>
              <Card.Body>
                <Card.Title>Update Profile</Card.Title>
                <Form
                  className="update-form"
                  onSubmit={(e) =>
                    this.editUser(
                      e,
                      this.Username,
                      this.Password,
                      this.Email,
                      this.Birthday
                    )
                  }
                >
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="Username"
                      placeholder="New Username"
                      onChange={(e) => this.setUsername(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="Password"
                      placeholder="New Password"
                      onChange={(e) => this.setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      placeholder="Enter Email"
                      onChange={(e) => this.setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      type="date"
                      name="Birthday"
                      onChange={(e) => this.setBirthday(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                  <Button style={{ marginRight: 10 }} type="submit" onClick={this.editUser}>Update User</Button>
                  <Button className="delete-button" variant="dark" onClick={() => this.onDeleteUser()} > Delete User </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Card className="favorite-card">
          <Card.Body>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h4 className="user-header">{Username} Favorite Movies</h4>
              </Col>
            </Row>
            <Row>
              {FavoriteMovies.length === 0 && (
                <div className="text-center">No Favorite Movie</div>
              )}
              <Row className="favorite-container">
                {FavoriteMovies.length > 0 && movies.map(({ ImageUrl, Title, _id }) => {
                  if (_id === FavoriteMovies.find((fav) => fav === _id)
                  ) {
                    return (
                      <Col xs={12} md={6} lg={3} key={_id} className="fav-movie">
                        <Figure>
                          <Link to={`/movies/${_id}`}>
                            <Figure.Image src={ImageUrl} crossOrigin="anonymous"
                              alt={Title}>
                            </Figure.Image>
                            <Figure.Caption>
                              {Title}
                            </Figure.Caption>
                          </Link>
                        </Figure>
                        <Button variant="warning" value={_id} onClick={(e) => this.onRemoveFavorite(_id)} > Remove </Button>
                      </Col>
                    )
                  }
                })}
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Container >
    );
  }
}


let mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies
  }
}


export default connect(mapStateToProps, { setUser, updateUser })(ProfileView);