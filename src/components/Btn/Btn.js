import React from 'react';
import { connect } from 'react-redux';

import { calcButtonClick } from '../../actions';

import './Btn.css';

const Btn = ({ symbol, act, onButtonClick, userId }) => {

    return (
        <button className='btn'
            onClick={() => onButtonClick(userId, symbol, act)}>
            {symbol}
        </button>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (userId, symbol, act) => calcButtonClick(userId, symbol, act, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Btn);
