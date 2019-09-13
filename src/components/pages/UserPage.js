import React from 'react';
import Calc from '../Calc';
import History from '../History';

import './pages.css';

const UserPage = ({ match }) => {

    const { id } = match.params;

    return (
        <div className="flex-box">
            <Calc id={id} />
            <History id={id} />
        </div>
    )
};

export default UserPage;