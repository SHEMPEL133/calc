import React, { Component } from 'react';

import './BtnLink.css';

export default class BtnLink extends Component {
    render() {
        let { text } = this.props;

        let clazz = 'btn-link';
        return (
            <div className={clazz}>{text}</div>
        )
    }
}