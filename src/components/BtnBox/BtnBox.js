import React, { Component } from 'react';

import './BtnBox.css';

import Btn from '../Btn';

export default class BtnBox extends Component {

    clazz = 'btn-box';

    render() {

        let { buttons, onChange } = this.props;

        const arr = buttons.map((item) => {

            const { label, id, act } = item;
            return (
                <Btn key={id}
                    label={label}
                    act={act}
                    onChange={onChange} />
            )
        });


        return (
            <div className={this.clazz}>
                {arr}
            </div>
        )
    }
}