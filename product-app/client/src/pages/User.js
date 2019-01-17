import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import APIUser from "../utils/APIUser";

class User extends Component {
    state = {
        user: []
    };
    // When this component mounts, grab the user with the _id of this.props.match.params.id
    componentDidMount() {
        APIUser.getUser(this.props.match.params.id)
            .then(res => this.setState({ user: res.data, name: "", loggedIn: "", email: "" }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* //   <Container fluid> */}
                {/* // <Row> */}
                {/* //   <Col size="md-12"> */}
                <Jumbotron>
                    <h1>
                        {this.state.user.name} by {this.state.user.email}
                    </h1>
                </Jumbotron>
                {/* //   </Col> */}
                {/* // </Row> */}
                <Container>
                    <Jumbotron>
                        <Row>
                            <Col size="md-2">
                                <Link to="/profile">← Back to Profile</Link>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default User;
