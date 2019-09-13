import React from 'react';
import { connect } from 'react-redux';

import './History.css'

const History = ({ history }) => {

    if (!history) {
        history = []
    }

    let key = 0;
    const historyArr = history.map((item) => {
        return <li key={key++} className='list-style-none'>{item}</li>
    })

    return (
        <div className='history'>
            <h2 className='history__title'>History</h2>
            <ul className='flex-box-column'>
                {historyArr}
            </ul>
        </div>
    )
};

const mapStateToProps = ({ users }, { id }) => {
    const intId = parseInt(id);
    const user = users.find((user) => (user.id === intId) ? true : false);
    const { history } = user;
    return { history }
};

export default connect(mapStateToProps, null)(History);