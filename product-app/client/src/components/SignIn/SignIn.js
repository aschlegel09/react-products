import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ReactModal from 'react-modal';
import config from "../../config.json";

// import queryString from "query-string";
// componentWillMount() {
//   var query = queryString.parse(this.props.location.search);
//   if (query.token) {
//     window.localStorage.setItem("jwt", query.token);
//     this.props.history.push("/");
//   }
// }

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      isAuthenticated: false,
      isLoggedIn: false,
      user: null,
      token: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  logout = (obj) => {
    this.setState({ isAuthenticated: false, token: '', user: null, isLoggedIn: false, showModal: false })
    console.log(obj + "\nlogged out");
  };

  facebookResponse = (response) => {
    console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://localhost:3001/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token, isLoggedIn: true })
          console.log("State changed");
        }
      });
    })
  };
  googleResponse = (response) => {
    console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://localhost:3001/api/v1/auth/google', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token, isLoggedIn: true })
        }
      });
    })
  };
  onFailure = (error) => {
    alert(error);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {

//     const isLoggedIn = this.state.isLoggedIn;
// <div>
//           The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//         </div>
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated.</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <button onClick={this.logout} className="button">Log Out</button>
        </div>
      </div>
    ) : (
        <div>
          <FacebookLogin
            appId={config.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={this.facebookResponse}
            
          />
          <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
            className="button"
          />
        </div>
      );
    return (

      <div>
      
        <button onClick={this.handleOpenModal}>Log In</button>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          contentLabel="Social Media Login"
        >
          {content}
          <button onClick={this.logout} className="button">Log Out</button>
          <button onClick={this.handleCloseModal}>Close Window</button>
        </ReactModal>
      </div>
    )
  }
}

export default SignIn;