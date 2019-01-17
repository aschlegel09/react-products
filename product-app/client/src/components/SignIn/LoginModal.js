import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ReactModal from 'react-modal';
import keys from "../../keys.js";
import Reveal from 'react-reveal/Reveal';

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

class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            loggedIn: false,
            isRegisterOpen: false,
            isLoginOpen: false,
            user: "",
            password: "",
            email: ""

        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);
    };

    showLoginBox() {
        this.setState({ isRegisterOpen: false, isLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    userLoggedIn() {
        this.setState({ loggedIn: true });
        //   console.log(loggedIn);
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
                <button onClick={this.handleOpenModal}>Log In Normally</button>
                <Reveal effect="fadeInUp">
                    <ReactModal
                        ariaHideApp={false}
                        isOpen={this.state.showModal}
                        style={customStyles}
                        contentLabel="Normal Login"
                    >
                        <div>
                            <div>
                                <div onClick={this.showLoginBox.bind(this)}
                                className={"" + (this.state.isLoginOpen ? "selected" : "muted")} 
                                >
                                    Login
                                </div>

                                <div onClick={this.showRegisterBox.bind(this)}
                                className={"" + (this.state.isRegisterOpen ? "selected" : "muted")} 
                                >
                                    Register
                               </div>
                            </div>
                        </div>

                        {this.state.isLoginOpen && <LoginBox />}
                        {this.state.isRegisterOpen && <RegisterBox />}

                        <button onClick={this.handleCloseModal}>Close Window</button>
                    </ReactModal>
                </Reveal>
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
            passwordState: ""
        };
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
    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        this.clearValidationError("username");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationError("password");

        if (e.target.value.length > 8) {
            this.setState({ passwordState: "password-strong" });
        } else {
            this.setState({ passwordState: "password-weak" });
        }
    }

    submitLogin(e) {

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
                            <label htmlFor="username">Username</label>
                            <input text="text" name="username" placeholder="username" onChange={this.onUsernameChange.bind(this)}></input>
                            <small className="danger">{usernameError ? usernameError : ""}</small>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input text="text" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)}></input>
                            <small className="danger">{passwordError ? passwordError : ""}</small>

                            <div className="password-state">
                                <div className={"password-weak " + (passwordWeak ? "show" : "")}></div>
                                <div className={"password-strong " + (passwordStrong ? "show" : "")}></div>
                            </div>

                        </div>

                        <button onClick={this.submitLogin.bind(this)}>Login</button>
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
    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        this.clearValidationError("username");
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
        this.clearValidationError("email");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationError("password");

        if (e.target.value.length > 8) {
            this.setState({ passwordState: "password-strong" });
        } else {
            this.setState({ passwordState: "password-weak" });
        }
    }

    submitRegister(e) {

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

                            <label htmlFor="username">Username</label>
                            <input text="text" name="username" placeholder="username" onChange={this.onUsernameChange.bind(this)}></input>
                            <small className="danger">{usernameError ? usernameError : ""}</small>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input text="text" name="email" placeholder="email" onChange={this.onEmailChange.bind(this)}></input>
                            <small className="danger">{emailError ? emailError : ""}</small>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input text="text" name="password" placeholder="password" onChange={this.onPasswordChange.bind(this)}></input>
                            <small className="danger">{passwordError ? passwordError : ""}</small>

                            <div className="password-state">
                                <div className={"password-weak " + (passwordWeak ? "show" : "")}></div>
                                <div className={"password-strong " + (passwordStrong ? "show" : "")}></div>
                            </div>

                        </div>

                        <button onClick={this.submitRegister.bind(this)}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal;