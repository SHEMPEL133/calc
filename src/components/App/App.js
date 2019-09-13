import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, UserPage, UserListPage } from '../pages';

import './App.css';

import Header from '../Header';
import UserEdit from '../UserEdit';
import UserCreate from '../UserCreate';
import CreateBtn from '../CreateBtn/CreateBtn';

const App = () => {
    return (
        <main className='app'>
            <Header />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route
                    exact
                    path='/users'
                    component={UserListPage} />
                <Route
                    exact
                    path='/users/:id'
                    render={({ history, match }) => {
                        const { id } = match.params;
                        return <UserPage id={id} history={history} />
                    }}
                />
                <Route
                    path='/users/:id/edit'
                    render={({ match }) => {
                        const { id } = match.params;
                        return <UserEdit id={id} />
                    }} />
                <Route
                    path='/users/:id/add-button'
                    render={({ history, match }) => {
                        const { id } = match.params;
                        return <CreateBtn id={id} history={history} />
                    }} />
                <Route
                    exact
                    path='/user-create'
                    component={UserCreate} />
            </Switch>
        </main>
    )
};

export default App;