import React from 'react';

import './UserListItem.css';

const UserListItem = ({ user, onEdit, onDelete, onItemSelected }) => {
    const { name, surname, id } = user;
    return (
        <li className="user-item">
            <div className="user-item_name">
                <span
                    onClick={() => onItemSelected(id)}>
                    {name} {surname}
                </span>
            </div>
            <button className="user-item_btn user-item_edit"
                onClick={() => onEdit(id)}>
                Edit
            </button>
            <button className="user-item_btn user-item_delete"
                onClick={() => onDelete(id)}>
                Delete
            </button>
        </li >
    );
};

// const mapStateToProps = (state) => {
//     return {

//     };
// };

// const mapDispatchToProps = () => {
//     return {
//         onEdit: (id) => {
//             console.log(`Edit ${id}`)
//         },
//         onDelete: (id) => {
//             console.log(`Delete ${id}`)
//         },
//     };
// };

export default UserListItem;
