import React from 'react';
import { connect } from 'react-redux';

import { calcButtonClick } from '../../actions';

import './Btn.css';

const Btn = ({ symbol, act, onButtonClick }) => {

    return (
        <button className='btn'
            onClick={() => onButtonClick(symbol, act)}>
            {symbol}
        </button>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (symbol, act) => calcButtonClick(symbol, act, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Btn);
