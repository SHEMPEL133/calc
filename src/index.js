import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { history } from './utils';
import App from './components/App';
import ErrorBoudry from './components/ErrorBoundry';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoudry>
            <Router history={history}>
                <App />
            </Router>
        </ErrorBoudry>
    </Provider>,
    document.getElementById('root'));

