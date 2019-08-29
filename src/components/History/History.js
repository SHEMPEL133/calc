import React, { Component } from 'react';

import './History.css'

export default class History extends Component {

    state = {
        
    }

    render() {
        let historyArr = [];
        const history = sessionStorage.getItem('history');
        if (history) {
            historyArr = JSON.parse(history);
        }

        let i = 0;
        let arr = historyArr.map((item) => {
            return (<div key={i++}>{item}</div>)
        });

        return (
            <div>
                {arr}
            </div>
        )
    }
}