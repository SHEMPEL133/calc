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
            <div>
                <h1 className='user-create-title'>Create Button</h1>
                <form className='flex-box'
                    onSubmit={() =>
                        this.props.buttonCreated(this.props.id, this.state.label)}>
                    <input type="text" className="add-input form"
                        placeholder="Enter new button"
                        onChange={this.onLabelButtonChange} />
                    <button className="btn-link">
                        Add button
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buttonCreated: (userId, label) => {
            history.push('./');
            return dispatch(buttonCreated(userId, label));
        }
    }
};

export default connect(null, mapDispatchToProps)(CreateBtn);