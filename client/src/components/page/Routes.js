import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Stories from './Stories';
import Story from './Story';
import Login from './Login';
import Admin from './Admin';
import NotFound from './NotFound';

export default [

    {
        name: 'home',
        path: '/',
        exact: true,
        component: Home
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
        name: 'not-found',
        component: NotFound
    }
];