import React, { Component } from 'react';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import ReactModal from 'react-modal';
// import keys from "../../keys.js";
import Reveal from 'react-reveal/Reveal';
import { Input, FormBtnNav, FormBtn } from '../Form/index';
import { Container } from '../Grid';
// import User from '../../../../models/User';
import axios from 'axios';

const customStyles = {

        top: '110px',
        maxWidth: '800px',
        width: '600px',
        overlay: {zIndex: 10000},
        minWidth: '400px',
        left: '110px',
        right: 'auto',
        bottom: 'auto',
        margin: '0 auto',
        marginLeft: '-90px',
        marginTop: '-210px',
        transform: 'translate(50%, 50%)',
        minHeight: '500px',
        height: '600px'
    
};

class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            loggedIn: false,
            isRegisterOpen: false,
            isLoginOpen: false,
            username: "",
            password: "",
            email: "",
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    showLoginBox() {
        this.setState({ isRegisterOpen: false, isLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    userLoggedIn() {
        this.setState({ loggedIn: true });
    }

    handleOpenModal() {
        this.setState({ showModal: true, isLoginOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.backgroundColor.style.color = '#000';
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {

        return (

            <div>
                <Container fluid>
                <FormBtnNav onClick={this.handleOpenModal}
                >Log In</FormBtnNav>
                <Reveal effect="fadeInUp">
                    <ReactModal
                        ariaHideApp={false}
                        isOpen={this.state.showModal}
                        style={customStyles}
                        contentLabel="Normal Login"
                    >
                        <div>
                            <div>

                                <button onClick={this.showLoginBox.bind(this)}
                                    className={"" + (this.state.isLoginOpen ? "btn-success" : "btn-primary")}
                                >
                                    Login
                                </button>

                                <button onClick={this.showRegisterBox.bind(this)}
                                    className={"" + (this.state.isRegisterOpen ? "btn-success" : "btn-primary")}
                                >
                                    Register
                               </button>

                            </div>

                        </div>
                        <hr />
                        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
                        {this.state.isLoginOpen && <LoginBox onSubmit={fields => this.onSubmit(fields)} />}
                        {this.state.isRegisterOpen && <RegisterBox onSubmit={fields => this.onSubmit(fields)} />}
                        <hr />
                        
                        <FormBtn onClick={this.handleCloseModal}>Close Window</FormBtn>
                    </ReactModal>
                </Reveal>
                
                </Container>
            </div>
        )
    }
}


class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
            errors: [],
            username: "",
            password: "",
            passwordState: "",
            showModal: true
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    change = e => {
        this.setState({
            [e.target.username]: e.target.value
        });
    }


    handleOpenModal() {
        this.setState({ showModal: true, isLoginOpen: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }


    showLoginBox() {
        this.setState({ isRegisterOpen: false, isLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    showValidationError(element, message) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { element, message }] }));
    }

    clearValidationError(element) {
        this.setState((prevState) => {
            let arr = [];
            for (let err of prevState.errors) {
                if (element !== err.element) {
                    arr.push(err);
                }
            }
            return { errors: arr };
        });
    }

    // whenever a user types a new character
    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
        this.clearValidationError("username");
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
        this.clearValidationError("password");

        if (e.target.value.length > 8) {
            this.setState({ passwordState: "password-strong" });
        } else {
            this.setState({ passwordState: "password-weak" });
        }
    }

    submitLogin = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        
        const obj = {
            username: this.state.username,
            password: this.state.password,
            contentType: "application/json"
          };
          axios.post('http://localhost:3001/submit', obj) 
              .then(res => console.log(res.data));
          
        // this.props.submitLogin(this.state);
        this.setState({
            username: "",
            password: "",
            showLoginBox: "false",
            showModal: "false",
            showRegisterBox: "false"
        })

        if (this.state.username === "") {
            this.showValidationError("username", "Username not entered");

        } if (this.state.password === "") {
            this.showValidationError("password", "Password not entered");
        }

    }

    render() {

        let usernameError = null, passwordError = null

        for (let err of this.state.errors) {

            if (err.element === "username") {
                usernameError = err.message;

            } if (err.element === "password") {
                passwordError = err.message;
            }
        }

        let passwordWeak = false, passwordStrong = false;

        if (this.state.passwordState === "weak") {
            passwordWeak = true;
        } else if (this.state.passwordState === "strong") {
            passwordStrong = true;
        };

        return (
            <div>
                <div>
                    <div>
                        <div>
                            <h5>Welcome Back! Login below:
                            </h5>
                            <label htmlFor="username">Username</label>
                            <Input text="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUsernameChange}></Input>
                            <small className="danger">{usernameError ? usernameError : ""}</small>
                        </div>
                
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input text="text" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange}></Input>
                            <small className="danger">{passwordError ? passwordError : ""}</small>

                            <div className="password-state">
                                <div className={"password-weak " + (passwordWeak ? "show" : "")}></div>
                                <div className={"password-strong " + (passwordStrong ? "show" : "")}></div>
                            </div>

                        </div>

                        <FormBtn onClick={this.submitLogin}>Login</FormBtn>
                    </div>
                </div>
            </div>
        )
    }
}

class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: false,
            isRegisterOpen: true,
            errors: [],
            username: "",
            email: "",
            password: "",
            passwordState: ""
        };
    }

    change = e => {
        this.setState({
            [e.target.username]: e.target.value
        });
    }

    showLoginBox() {
        this.setState({ isRegisterOpen: false, isLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    showValidationError(element, message) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { element, message }] }));
    }

    clearValidationError(element) {
        this.setState((prevState) => {
            let arr = [];
            for (let err of prevState.errors) {
                if (element !== err.element) {
                    arr.push(err);
                }
            }
            return { errors: arr };
        });
    }

    // whenever a user types a new character
    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
        this.clearValidationError("username");
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
        this.clearValidationError("email");
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
        this.clearValidationError("password");

        if (e.target.value.length > 8) {
            this.setState({ passwordState: "password-strong" });
        } else {
            // this.showValidationError("password not strong enough");
            this.setState({ passwordState: "password-weak" });
        }
    }

    submitRegister = (e) => {
        e.preventDefault();

        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);

        this.setState({
            username: "",
            email: "",
            password: "",
            isLoginOpen: "false",
            isRegisterOpen: "false",
            showModal: "false"
        })

        if (this.state.username === "") {
            this.showValidationError("username", "Username not entered");

        } if (this.state.email === "") {
            this.showValidationError("email", "Email not entered");

        } if (this.state.password === "") {
            this.showValidationError("password", "Password not entered");
        }
    }

    render() {

        let usernameError = null, passwordError = null, emailError = null;

        for (let err of this.state.errors) {

            if (err.element === "username") {
                usernameError = err.message;

            } if (err.element === "email") {
                emailError = err.message;

            } if (err.element === "password") {
                passwordError = err.message;
            }
        }

        let passwordWeak = false, passwordStrong = false;

        if (this.state.passwordState === "weak") {
            passwordWeak = true;
        } else if (this.state.passwordState === "strong") {
            passwordStrong = true;
        };

        return (
            <div>
                <div>
                    <div>
                        <div>

                    <h5>If this is your first visit, Register below:
                    </h5>
                            <label htmlFor="username">Username</label>
                            <Input text="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUsernameChange}></Input>
                            <small className="danger">{usernameError ? usernameError : ""}</small>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Input text="text" name="email" placeholder="email" value={this.state.email} onChange={this.onEmailChange}></Input>
                            <small className="danger">{emailError ? emailError : ""}</small>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Input text="text" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange}></Input>
                            <small className="danger">{passwordError ? passwordError : ""}</small>

                            <div className="password-state">
                                <div className={"password-weak " + (passwordWeak ? "show" : "")}></div>
                                <div className={"password-strong " + (passwordStrong ? "show" : "")}></div>
                            </div>

                        </div>

                        <FormBtn onClick={this.submitRegister}>Register</FormBtn>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal;