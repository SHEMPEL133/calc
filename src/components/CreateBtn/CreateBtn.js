import React, { Component } from 'react';
import { connect } from 'react-redux';

import { buttonCreated } from '../../actions';
import { history } from '../../utils';

import './CreateBtn.css';

class CreateBtn extends Component {

    state = {
        label: ''
    }

    onLabelButtonChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    render() {
        return (
            <form onSubmit={() =>
                this.props.buttonCreated(this.props.id, this.state.label)}>
                <input type="text" className="add-input"
                    placeholder="Enter new button"
                    onChange={this.onLabelButtonChange} />
                <button className="add-btn">
                    Add button
                    </button>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        buttonCreated: (userId, label) => {
            history.push('./');
            return dispatch(buttonCreated(userId, label));
        }
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps)(CreateBtn);