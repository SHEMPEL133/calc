import React, { Component } from 'react';

import './Display.css'

export default class Dispay extends Component {

    clazz = 'display';

    render() {

        const {result} = this.props;

        return (
            <div className={this.clazz}>
                {result}
            </div>
        )
    }
}