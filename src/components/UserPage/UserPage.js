import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './UserPage.css';

export default class UserPage extends Component {

    state = {

    };

    render() {
        return (
            <div>
                <div>
                    <span>Name:</span>
                    <input type="text" value={this.props.id} />
                </div>
                <div>
                    <span>Surname:</span>
                    <input type="text" />
                </div>
            </div>
        )
    }
}
