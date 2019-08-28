import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Calc from '../Calc';
import CreateBtn from '../CreateBtn';



export default class App extends Component {

    state = {
        buttons: [
            { id: 'ce', label: 'CE', act: 'deleteCurrent' },
            { id: 'c', label: 'C', act: 'deleteAll' },
            { id: 'back', label: '←', act: 'back' },
            { id: 'division', label: '÷', act: 'div' },
            { id: 'seven', label: '7', act: 'add' },
            { id: 'eight', label: '8', act: 'add' },
            { id: 'nine', label: '9', act: 'add' },
            { id: 'multiplication', label: '×', act: 'multiplication' },
            { id: 'four', label: '4', act: 'add' },
            { id: 'five', label: '5', act: 'add' },
            { id: 'six', label: '6', act: 'add' },
            { id: 'minus', label: '-', act: 'minus' },
            { id: 'one', label: '1', act: 'add' },
            { id: 'two', label: '2', act: 'add' },
            { id: 'three', label: '3', act: 'add' },
            { id: 'plus', label: '+', act: 'plus' },
            { id: 'plus-minus', label: '±', act: 'inversion' },
            { id: 'zero', label: '0', act: 'add' },
            { id: 'dot', label: '.', act: 'dot' },
            { id: 'equally', label: '=', act: 'equal' }
        ]
    }

    saveBtns = () => {
        let btns = localStorage.getItem('buttons');
        let buttons = [];
        if (btns) {
            buttons = JSON.parse(btns);
        } else {
            localStorage.setItem('buttons', JSON.stringify(this.state.buttons));
        }
    }

    clazz = 'app'

    render() {

        this.saveBtns();

        return (
            <div>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/add-new-button">Add</Link>
                    <Route exact path="/"  >
                        <Route component={Calc} />
                    </Route>
                    <Route path="/add-new-button" component={CreateBtn} />
                </Router>
            </div>
        )
    }
}