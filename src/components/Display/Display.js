import React from 'react';

import './Display.css'

const Display = (props) => {

    const { currentValue = '0',
        previousValue = '0',
        operator = '' } = props;

    return (
        <div className='display'>
            {/* <div>{previousValue + operator}</div>
            <div>{currentValue}</div> */}
            <div>{10 + '+'}</div>
            <div>18</div>
        </div>
    );
};

export default Display;