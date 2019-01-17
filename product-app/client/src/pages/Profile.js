import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import APIUser from "../utils/APIUser";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import User from "./User";

class Profile extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    loggedIn: ""
  };

  componentDidMount() {
    this.loadUsers();
  }
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  loadUsers = () => {
    APIUser.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", loggedIn: "", email: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>User List</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/profile/" + user._id}>
                      <strong>
                        User: {user.name}<br />
                        Email: {user.email}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteuser(user._id)} /> */}
                  </ListItem>
                ))}
                  <Row>
                {/* <Product /><Product />
                </Row>
                <Row>
                <Product /><Product />
                </Row>
                <Row>
                <Product /><Product /> */}
                </Row>
              </List>
                
            ) : (
              <h3>No Results to Display</h3>
            )}
              {/* <User /> */}

          </Col>
          
        </Row>
      </Container>
    );
  }
}
export default Profile;
