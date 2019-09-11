import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { HomePage, UserPage, UserListPage } from '../pages';

import './App.css';

import Calc from '../Calc';
import CreateBtn from '../CreateBtn';
import History from '../History';
import UsersBox from '../UsersBox';
import Header from '../Header';


const App = () => {
    return (
        <main className=''>
            <Header />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route
                    path='/users/'
                    component={UserListPage} />
                <Route
                    path='/users/:id'
                    component={UserPage} />
                <Redirect to='/' />
            </Switch>
        </main>
    )
};

export default App;

// export default class App extends Component {

//     state = {
//         buttons: [
//             { id: 'ce', label: 'CE', act: 'deleteCurrent' },
//             { id: 'c', label: 'C', act: 'deleteAll' },
//             { id: 'back', label: '←', act: 'back' },
//             { id: 'division', label: '÷', act: 'div' },
//             { id: 'seven', label: '7', act: 'add' },
//             { id: 'eight', label: '8', act: 'add' },
//             { id: 'nine', label: '9', act: 'add' },
//             { id: 'multiplication', label: '×', act: 'multiplication' },
//             { id: 'four', label: '4', act: 'add' },
//             { id: 'five', label: '5', act: 'add' },
//             { id: 'six', label: '6', act: 'add' },
//             { id: 'minus', label: '-', act: 'minus' },
//             { id: 'one', label: '1', act: 'add' },
//             { id: 'two', label: '2', act: 'add' },
//             { id: 'three', label: '3', act: 'add' },
//             { id: 'plus', label: '+', act: 'plus' },
//             { id: 'plus-minus', label: '±', act: 'inversion' },
//             { id: 'zero', label: '0', act: 'add' },
//             { id: 'dot', label: '.', act: 'dot' },
//             { id: 'equally', label: '=', act: 'equal' }
//         ],
//         histUpdate: true
//     }

//     saveBtns = () => {
//         let btns = sessionStorage.getItem('buttons');
//         if (!btns) {
//             sessionStorage.setItem('buttons', JSON.stringify(this.state.buttons));
//         }
//     }

//     historyUpdate = () => {
//         this.setState({ histUpdate: !this.state.histUpdate });
//     }

//     clazz = 'app'

//     render() {

//         this.saveBtns();

//         return (
//             // В Eror обернуть
//             <Router>
//                 <div className={this.clazz}>

//                     <div className="flex-column">
//                         <Link to="/users" className="btn-link">Users</Link>
//                         <Link to="/" className="btn-link">Home</Link>
//                         <Link to="/add-new-button" className="btn-link">Add Button</Link>
//                     </div>
//                     <Switch>
//                         <Route exact path="/"  >
//                             <div className="flexLayout">
//                                 <Route render={() => <Calc historyUpdate={this.historyUpdate} />} />
//                                 <Route component={History} />
//                             </div>
//                         </Route>
//                         <Route path="/add-new-button" component={CreateBtn} />
//                         <Route path="/users" component={UsersBox} />

//                         {/* <Redirect to="/"/> */}
//                         {/* Route component={Page not found} */}
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }