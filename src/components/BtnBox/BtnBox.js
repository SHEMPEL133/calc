import React from 'react';

import './BtnBox.css';

import Btn from '../Btn';


const defaultButtons = [
    { id: 'ce', symbol: 'CE', act: 'deleteCurrent' },
    { id: 'c', symbol: 'C', act: 'deleteAll' },
    { id: 'back', symbol: '←', act: 'back' },
    { id: 'division', symbol: '÷', act: 'div' },
    { id: 'seven', symbol: '7', act: 'add' },
    { id: 'eight', symbol: '8', act: 'add' },
    { id: 'nine', symbol: '9', act: 'add' },
    { id: 'multiplication', symbol: '×', act: 'multiplication' },
    { id: 'four', symbol: '4', act: 'add' },
    { id: 'five', symbol: '5', act: 'add' },
    { id: 'six', symbol: '6', act: 'add' },
    { id: 'minus', symbol: '-', act: 'minus' },
    { id: 'one', symbol: '1', act: 'add' },
    { id: 'two', symbol: '2', act: 'add' },
    { id: 'three', symbol: '3', act: 'add' },
    { id: 'plus', symbol: '+', act: 'plus' },
    { id: 'plus-minus', symbol: '±', act: 'inversion' },
    { id: 'zero', symbol: '0', act: 'add' },
    { id: 'dot', symbol: '.', act: 'dot' },
    { id: 'equally', symbol: '=', act: 'equal' }
]


const BtnBox = (props) => {

    let { buttons, onChange } = props;

    const buttonsArray = [...defaultButtons, buttons];

    const arr = buttonsArray.map((item) => {

        const { symbol, id, act } = item;
        return (
            <Btn key={id}
                symbol={symbol}
                act={act} />
        )
    });

    return (
        <div className='btn-box'>
            {arr}
        </div>
    );
};

export default BtnBox;