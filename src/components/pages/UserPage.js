import React from 'react';

import Calc from '../Calc';
import History from '../History';

import './pages.css';

const UserPage = ({ history, id }) => {

    return (
        <div className="flex-box">
            <button
                onClick={() => history.push(`/users/${id}/add-button`)}>
                Add button
            </button>
            <Calc id={id} />
            <History id={id} />
        </div >
    )
};

export default UserPage;