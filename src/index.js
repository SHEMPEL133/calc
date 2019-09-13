import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { history } from './utils';
import App from './components/App';
import ErrorBoudry from './components/ErrorBoundry';
import UsersService from './services/UsersService';
import { UsersServiceProvider } from './components/UsersServiceContext'

import store from './store';


const usersService = new UsersService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoudry>
            <UsersServiceProvider value={usersService}>
                <Router history={history}>
                    <App />
                </Router>
            </UsersServiceProvider>
        </ErrorBoudry>
    </Provider>,
    document.getElementById('root'));

