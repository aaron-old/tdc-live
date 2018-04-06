import React, {Component} from 'react';
import Auth from '../../util/auth';

const Login = () => {
    const auth = new Auth();
    auth.login();
    return <div>Login Page</div>
};

export default Login;