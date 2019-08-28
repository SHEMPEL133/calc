import React, { Component } from 'react';

import './Btn.css';

export default class Btn extends Component {

    clazz = 'btn';

    render() {

        const { label, act, onChange } = this.props;

        return (
            <button className={this.clazz}
                onClick={() => onChange(label, act)}>
                {label}
            </button>
        )
    }
}