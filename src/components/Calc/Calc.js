import React from 'react';

import Display from '../Display';
import BtnBox from '../BtnBox';

import './Calc.css';

const Calc = ({ id }) => {

    return (
        <div className='calc'>
            <Display />
            <BtnBox userId={id} />
        </div>
    );
};

export default Calc;