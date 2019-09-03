import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CreateBtn.css';

export default class CreateBtn extends Component {

    state = {
        label: ''
    }

    onLabelButtonChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    addButton = () => {
        let buttons = JSON.parse(sessionStorage.getItem('buttons'));
        buttons.push({
            id: this.state.label,
            label: this.state.label,
            act: 'add'
        })
        sessionStorage.setItem('buttons', JSON.stringify(buttons));
        //history.push('/');
    }


    render() {
        return (
            <form onSubmit={this.addButton}>
                <input type="text" className="add-input"
                    placeholder="Enter new button"
                    onChange={this.onLabelButtonChange} />
                    <button className="add-btn">
                        Add button
                    </button>
            </form>
        )
    }
}