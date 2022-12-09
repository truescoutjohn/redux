import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from './users.actions.js';

const Users = ({ users, addUser, deleteUser }) => {
  const onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const userData = { id, name: `User # ${id}` };
    addUser(userData);
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onCreateUser}>
        Create user
      </button>
      <ul className="users__list">
        {users.userList.map(user => (
          <li className="users__list-item">
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapState = state => {
  return {
    users: state.users,
  };
};

const mapDispatch = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id)),
    addUser: userData => dispatch(addUser(userData)),
  };
};

const connector = connect(mapState, mapDispatch);
export default connector(Users);
