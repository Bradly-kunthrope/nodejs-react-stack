import React, { Component } from "react";
import {
    Link,
    Redirect
} from 'react-router-dom';
// import Header from './components/HeaderComponent/header';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid';
//fontawesome.library.add(faCheckSquare, faCoffee);
import { GoogleLogin } from 'react-google-login-component';
import { Icon } from 'react-fa';
const axios = require('axios');



export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    state = {
        email: '',
        password: '',
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    responseGoogle(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var googleId = googleUser.getId();

        console.log({ googleId });
        console.log({ accessToken: id_token });
        //anything else you want to do(save to localStorage)...
    }

    onSubmit = e => {
        e.preventDefault();
        try {
            axios.post('http://localhost:8000/api/login', {
                username: this.state.username,
                password: this.state.password
            }
            .then(response => {
                console.log(response, 'logged in!');
            })
        )
        } catch (e) {
            console.log('login failed!');
            console.log(e);
        }
    };
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                <input
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                />
                <br />
                <button onClick={(e) => this.onSubmit(e)} type="primary">
                    Login
        </button>
                </div>
                <Icon name='google' /><GoogleLogin socialId="300506145313-5ci2p704h9lvb9vbk2m4o76bh9jkmjmr.apps.googleusercontent.com"
                    className="google-login"
                    scope="profile"
                    fetchBasicProfile={false}
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google" />
            </div>
        );
    }

}

