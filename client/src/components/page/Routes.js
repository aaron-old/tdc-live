import React from 'react';
import {Redirect} from 'react-router-dom';
import Auth from '../../util/auth';
import Home from './home/home';
import Contact from './contact/contact';
import Stories from './story/stories';
import Story from './story/story';
import Login from './login/login';
import Admin from './admin/admin';
import CallbackPage from './Callback';
import NotFound from './error/404';
import Profile from "./profile/profile";

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

export default [

    {
        name: 'home',
        path: '/',
        exact: true,
        render: (props) => (<Home auth={auth} {...props}/>)
    },
    {
        name: 'home',
        path: '/home',
        exact: true,
        render: (props) => (<Home auth={auth}{...props}/>)
    },
    {
        name: 'contact',
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        name: 'stories',
        path: '/stories/',
        exact: true,
        render: Stories
    },
    {
        name: 'story',
        path: '/stories/:title',
        exact: true,
        render: (props) => <Story {...props}/>
    },
    {
        name: 'login',
        path: '/login',
        exact: true,
        component: Login
    },
    {
        name: 'admin',
        path: '/admin',
        exact: true,
        component: Admin
    },
    {
        name: 'profile',
        path: '/profile',
        render: (props) => {
            return !auth.isAuthenticated() ? (
                <Redirect to="/login"/>
            ): (
                <Profile auth={auth} {...props}/>
            )
        }
    },
    {
        name: 'callback',
        path: '/callback',
        exact: true,
        render: (props) => {
            handleAuthentication(props);
            return <CallbackPage {...props}/>
        }
    },
    {
        name: 'not-found',
        component: NotFound
    }
];