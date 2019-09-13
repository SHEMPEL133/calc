import React from 'react';
import { connect } from 'react-redux';

import './History.css'

const History = ({ history }) => {
    return (
        <div className="history">
            <h2 className="history__title">History</h2>
            {history}
        </div>
    )
};

const mapStateToProps = ({ users }, { id }) => {
    const intId = parseInt(id);
    const user = users.find((user) => (user.id === intId) ? true : false);
    const { history } = user;
    return { history }
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps,
    mapDispatchToProps)(History);