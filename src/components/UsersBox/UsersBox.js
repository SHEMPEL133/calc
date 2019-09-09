import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import User from '../User';
import UserPage from '../UserPage';

import './UsersBox.css';

export default class UsersBox extends Component {

    state = {
        users: [
            { name: 'Nick', surName: 'Vonka' },
            { name: 'Aria', surName: 'Stark' },
            { name: 'Roz', surName: 'Zero' }
        ]
    }

    render() {

        const { users } = this.state;

        const usersArray = users.map((user) => {

            const { name, surName } = user;

            return (
                <User key={name + surName}
                    name={name}
                    surName={surName}
                    id={(name + '-' + surName).toLowerCase()} />
            )
        });

        return (
            <Switch>
                <Route exact path='/users'>
                    <ul className="user-box">
                        {usersArray}
                    </ul>
                </Route>
                <Route path='/users/:id'
                    render={({ match }) => {
                        const { id } = match.params;
                        return <UserPage id={id} />
                    }} />
            </Switch>
        )
    }
}