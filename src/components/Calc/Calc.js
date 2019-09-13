import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps,
    mapDispatchToProps)(Calc);