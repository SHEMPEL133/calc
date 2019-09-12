import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withUsersService } from '../hoc';

import Display from '../Display';
import BtnBox from '../BtnBox';

import './Calc.css';

// export default class Calc extends Component {

//     state = {
//         previousValue: '',
//         currentValue: '0',
//         operator: '',
//     }

//     onChange = (symbol, act) => {
//         switch (act) {
//             case 'add':
//                 this.inputDigit(symbol);
//                 break;
//             case 'dot':
//                 this.inputDot(symbol);
//                 break;
//             case 'deleteAll':
//                 this.deleteAll();
//                 break;
//             case 'deleteCurrent':
//                 this.deleteCurrent();
//                 break;
//             case 'back':
//                 this.back();
//                 break;
//             case 'equal':
//                 this.result();
//                 break;
//             case 'inversion':
//                 this.inversion();
//                 break;
//             default:
//                 this.inputOperator(symbol);
//                 break;
//         }
//     };

//     inversion = () => {
//         let { currentValue } = this.state;
//         let numberCurrentValue = parseFloat(currentValue);
//         numberCurrentValue *= -1;
//         this.setState({ currentValue: numberCurrentValue.toString() })
//     }

//     back = () => {
//         const copyCurrentValue = this.state.currentValue;
//         if (copyCurrentValue.length === 1) {
//             return this.setState({ currentValue: '0' })
//         }
//         if (copyCurrentValue.length === 2 && copyCurrentValue[0] === '-') {
//             return this.setState({ currentValue: '0' })
//         }
//         if (copyCurrentValue.length > 1) {
//             return this.setState({ currentValue: copyCurrentValue.slice(0, copyCurrentValue.length - 1) })
//         }
//     }

//     deleteCurrent = () => this.setState({ currentValue: '0' })

//     deleteAll = () => {
//         this.setState({
//             previousValue: '',
//             currentValue: '0',
//             operator: '',
//         })
//     }

//     inputDot = (symbol) => {
//         let { currentValue } = this.state;
//         if (!this.isExistDot(currentValue)) {
//             this.setState(() => {
//                 let copyCurrentValue = currentValue;
//                 return {
//                     currentValue: copyCurrentValue + symbol
//                 }
//             })
//         }
//     }

//     isExistDot = (str) => {
//         return str.indexOf('.') > 0 ? true : false
//     }

//     inputDigit = (symbol) => {
//         let { currentValue } = this.state;
//         this.setState(() => {
//             let copyCurrentValue = currentValue;
//             if (copyCurrentValue === '0') {
//                 return {
//                     currentValue: symbol
//                 }
//             } else {
//                 return {
//                     currentValue: copyCurrentValue + symbol
//                 }
//             }
//         })
//     }

//     inputOperator = (symbol) => {
//         let { currentValue, previousValue } = this.state;
//         if (currentValue === '0' && previousValue.length !== 0) {
//             this.setState({ operator: symbol })
//         } else
//             if (previousValue.length === 0 && currentValue !== '0') {
//                 this.setState({
//                     previousValue: currentValue,
//                     currentValue: '0',
//                     operator: symbol
//                 })
//             }
//     }

//     saveHistory = (str) => {
//         let historyArray = sessionStorage.getItem('history');
//         let history = [];
//         if (historyArray) {
//             history = JSON.parse(historyArray);
//         }
//         history.push(str);
//         sessionStorage.setItem('history', JSON.stringify(history));
//         this.props.historyUpdate();
//     }

//     result = () => {
//         let { currentValue, previousValue, operator } = this.state;

//         if (previousValue.length === 0) {
//             return
//         }

//         let trueOperator = '';
//         switch (operator) {
//             case '÷': trueOperator = '/';
//                 break;
//             case '×': trueOperator = '*';
//                 break;
//             default: trueOperator = operator;
//         }

//         if(currentValue[0] === '-'){
//             currentValue = '(' + currentValue + ')';
//         }

//         const expression = previousValue + trueOperator + currentValue;
//         console.log(expression);
//         const result = eval(expression);
//         this.saveHistory(expression + '=' + result);
//         this.setState({
//             currentValue: eval(result),
//             previousValue: '',
//             operator: ''
//         })
//     }

//     getButtons = () => {
//         let btns = sessionStorage.getItem('buttons');
//         if (btns) {
//             return JSON.parse(btns);
//         }
//     }

//     clazz = 'calc'
//     render() {

//         let { currentValue, previousValue, operator } = this.state;

//         let buttons = this.getButtons();

//         return (
//             <div className={this.clazz}>
//                 <Display currentValue={currentValue}
//                     previousValue={previousValue}
//                     operator={operator} />
//                 <BtnBox buttons={buttons}
//                     onChange={this.onChange} />
//             </div>
//         )
//     }
// }

const Calc = () => {
    // const { buttons } = user;
    return (
        <div className='calc'>
            {/* <Display currentValue={currentValue}
                previousValue={previousValue}
                operator={operator} />
            <BtnBox buttons={buttons}
                onChange={this.onChange} /> */}

            <Display currentValue={() => { }}
                previousValue={() => { }}
                operator={() => { }} />
            <BtnBox buttons={() => { }}
                onChange={() => { }} />
        </div>
    );
};

class CalcContainer extends Component {

    componentDidMount() {

    }

    render() {
        const { user } = this.props;

        return <Calc
            user={user} />
    }
}


const mapStateToProps = () => {
    return {  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { usersService } = ownProps;
    return {
        // fetchUsers: fetchUsers(usersService, dispatch),
        // onEdit: (id) => dispatch(userRenamed(id)),
        // onDelete: (id) => dispatch(userRemoved(id)),
    }
};

export default compose(
    withUsersService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CalcContainer);