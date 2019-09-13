import React from 'react';

import { connect } from 'react-redux';

import './Display.css'

const Display = ({ currentValue, previousValue, operator }) => {

    return (
        <div className='display'>
            <div>{previousValue + operator}</div>
            <div>{currentValue}</div>
        </div>
    );
};

const mapStateToProps = ({ currentValue, previousValue, operator }) => {
    return { currentValue, previousValue, operator };
};

export default connect(mapStateToProps, null)(Display);