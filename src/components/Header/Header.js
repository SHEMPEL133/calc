import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <ul className='header'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/users/'>Users</Link>
            </li>
        </ul>
    )
}

export default Header;