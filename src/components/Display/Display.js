import React, { Component } from 'react';

import './Display.css'

export default class Dispay extends Component {

    clazz = 'display';

    render() {

        const {currentValue, previousValue, operator} = this.props; 

        return (
            <div className={this.clazz}>
                <div className>{previousValue + operator}</div>
                <div className>{currentValue}</div>
            </div>
        )
    }
}