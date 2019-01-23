import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ReactModal from 'react-modal';
import keys from "../../keys.js";
import Reveal from 'react-reveal/Reveal';
import { FormBtn, FormBtnNav } from '../Form/index';

const customStyles = {
  content: {
    top: '110px',
    left: '110px',
    right: 'auto',
    bottom: 'auto',
    margin: '0 auto',
    transform: 'translate(50%, 50%)'
  }
};

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      isAuthenticated: false,
      isLoggedIn: false,
      user: null,
      token: '',
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  };

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
    fetch('http://localhost:3001/api/v1/auth/facebook', options).then(r => {//unexpected token > at JSON position 0
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {//unexpected token > at JSON position 0
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
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
    fetch('http://localhost:3001/api/v1/auth/google', options).then(r => {//unexpected token > at JSON position 0
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {//unexpected token > at JSON position 0
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
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

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.backgroundColor.style.color = '#000';
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {

    // const isLoggedIn = this.state.isLoggedIn;
    // <div>
    //   The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    //     </div>
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated.</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <FormBtn onClick={this.logout} className="button">Log Out</FormBtn>
        </div>
      </div>
    ) : (
        <div>
            <FacebookLogin
              appId={keys.facebook.appId}
              autoLoad={true}
              reauthenticate={true}
              fields="name,email,picture"
              callback={this.facebookResponse}
            />

            <GoogleLogin
              clientId={keys.google.clientID}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={this.googleResponse}
              onFailure={this.onFailure}
              className="button"
            />
          </div>
      );
    return (

      <div>

        <FormBtnNav onClick={this.handleOpenModal}
        className="login-btn"
        >Log In with Social Media</FormBtnNav>
        <Reveal effect="fadeInUp">
          <ReactModal
            ariaHideApp={false}
            isOpen={this.state.showModal}
            style={customStyles}
            contentLabel="Social Media Login"
          >
            {content}
            <FormBtn onClick={this.logout} className="button">Log Out</FormBtn>
            <FormBtn onClick={this.handleCloseModal}>Close Window</FormBtn>
          </ReactModal>
        </Reveal>
      </div>
    )
  }
}

export default SignIn;