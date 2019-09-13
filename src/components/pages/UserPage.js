import React from 'react';

import Calc from '../Calc';
import History from '../History';

import './pages.css';

const UserPage = ({ history, id }) => {

    return (
        <div>
            <h1 className='user-create-title'>Calculator</h1>
            <div className="flex-box">
                <Calc id={id} />
                <History id={id} />
            </div >
            <button className='btn-link center'
                onClick={() => history.push(`/users/${id}/add-button`)}>
                Add button
            </button>
        </div>
    )
};

export default UserPage;