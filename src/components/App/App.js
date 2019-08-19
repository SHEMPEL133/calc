import React, { Component } from 'react';

import './App.css';

import Display from '../Display';
import BtnBox from '../BtnBox';

export default class App extends Component {

    state = {
        buttons: [
            { id: 'ce', label: 'CE', act: 'delete' },
            { id: 'c', label: 'C', act: 'delete' },
            { id: 'back', label: '<-', act: 'back' },
            { id: 'division', label: '/', act: 'div' },
            { id: 'seven', label: '7', act: 'add' },
            { id: 'eight', label: '8', act: 'add' },
            { id: 'nine', label: '9', act: 'add' },
            { id: 'multiplication', label: 'X', act: 'multiplication' },
            { id: 'four', label: '4', act: 'add' },
            { id: 'five', label: '5', act: 'add' },
            { id: 'six', label: '6', act: 'add' },
            { id: 'minus', label: '-', act: 'minus' },
            { id: 'one', label: '1', act: 'add' },
            { id: 'two', label: '2', act: 'add' },
            { id: 'three', label: '3', act: 'add' },
            { id: 'plus', label: '+', act: 'plus' },
            { id: 'plus-minus', label: '+-', act: 'inversion' },
            { id: 'zero', label: '0', act: 'add' },
            { id: 'dot', label: '.', act: 'dot' },
            { id: 'equally', label: '=', act: 'finish' }
        ],
        saveResult: 0,
        result: 0,
        resultIsInteger: false,
        length: 0,
        doAction: ''
    }

    action = (label, act) => {
        this.setState(({ result, length, resiltIsInteger, saveResult, doAction }) => {
            switch (act) {
                case 'add': {
                    const strResult = result.toString();
                    if (strResult.length === 15) {
                        break;
                    }
                    const newStrResult = strResult + label;
                    const newLength = length + 1;
                    return {
                        result: parseFloat(newStrResult),
                        length: newLength,
                    }
                }

                case 'finish': {
                    const copyResult = result;
                    const copySaveResult = saveResult;
                    switch (doAction) {
                        case 'plus': {
                            return {
                                result: copySaveResult + copyResult,
                                copyResult: 0,
                                doAction: ''
                            }
                        }
                        case 'minus': {
                            return {
                                result: copySaveResult - copyResult,
                                copyResult: 0,
                                doAction: ''
                            }
                        }
                        case 'multiplication':{
                            return{
                                result: copySaveResult * copyResult,
                                copyResult: 0,
                                doAction: ''
                            }
                        }
                        case 'div':{
                            return{
                                result: copySaveResult / copyResult,
                                copyResult: 0,
                                doAction: ''
                            }
                        }
                        default: {
                            return {
                                saveResult: 0,
                                result: 0,
                                resultIsInteger: false,
                                length: 0,
                                doAction: ''
                            }
                        }
                    }
                }

                case 'plus': {
                    if (result === 0) {
                        return {}
                    }
                    return {
                        doAction: 'plus',
                        saveResult: result,
                        result: 0
                    }
                }

                case 'minus': {
                    if (result === 0) {
                        return {}
                    }
                    return {
                        doAction: 'minus',
                        saveResult: result,
                        result: 0
                    }
                }

                case 'multiplication': {
                    if (result === 0) {
                        return {}
                    }
                    return {
                        doAction: 'multiplication',
                        saveResult: result,
                        result: 0
                    }
                }

                case 'div':{
                    if (result === 0) {
                        return {}
                    }
                    return {
                        doAction: 'div',
                        saveResult: result,
                        result: 0
                    }
                }

                case 'dot':{
                    const strResult = result.toString();
                    const newStrResult = strResult + '.0';
                    console.log(parseFloat(newStrResult));
                    return{
                        
                    }
                }

                case 'delete': {
                    return {
                        result: 0,
                        resultIsInteger: false,
                        length: 0
                    }
                }

                case 'inversion': {
                    if (result === 0) {
                        return {}
                    }
                    const newResult = result * (-1);
                    return {
                        result: newResult
                    }
                }

                case 'back': {
                    if (result === 0) {
                        return {}
                    }
                    if (length === 1) {
                        return {
                            result: 0,
                            length: 0
                        }
                    }
                    const strResult = result.toString();
                    const newStrResult = strResult.slice(0, strResult.length - 1);
                    const newLength = length - 1;
                    return {
                        result: parseFloat(newStrResult),
                        length: newLength
                    }
                }
            }
        })
    };

    clazz = 'app'

    render() {

        let { buttons, result } = this.state;

        return (
            <div className={this.clazz}>
                <Display result={result} />
                <BtnBox buttons={buttons}
                    action={this.action} />
            </div>
        )
    }
}