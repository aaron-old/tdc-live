import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import './index.css';
import App from './App';
import history from './util/history';
import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
