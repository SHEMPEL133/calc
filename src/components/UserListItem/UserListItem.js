import React from 'react';

import './UserListItem.css';

const UserListItem = ({ user, onEdit, onDelete, onItemSelected }) => {
    const { name, surname, id } = user;
    return (
        <li className="user-item">
            <div className="user-item_name">
                <span
                    className="pointer"
                    onClick={() => onItemSelected(id)}>
                    {name} {surname}
                </span>
            </div>
            <button className="user-item_btn user-item_edit pointer"
                onClick={() => onEdit(id)}>
                Edit
            </button>
            <button className="user-item_btn user-item_delete pointer"
                onClick={() => onDelete(id)}>
                Delete
            </button>
        </li >
    );
};

export default UserListItem;
