import React, { Component } from 'react';

import './Btn.css';

export default class Btn extends Component {

    clazz = 'btn';

    render() {

        const { label, action, act } = this.props;

        return (
            <button className={this.clazz}
            onClick={() => action(label, act)}>
                {label}
            </button>
        )
    }
}