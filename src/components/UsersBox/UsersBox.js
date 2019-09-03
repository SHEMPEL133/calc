import React, { Component } from 'react';

import User from '../User';

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
                    surName={surName} />
            )
        });

        return (
            <div className="">
                {usersArray}
            </div>
        )
    }
}