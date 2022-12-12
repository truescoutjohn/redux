import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Filter from '../Filter.jsx';
import { filterTextSelector, usersSelector } from './users.selector.js';
import { changeFilter } from './users.actions.js';

const UsersList = ({ users, filterText, change }) => {
  const filteredUsers =
    filterText !== ''
      ? users.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
      : users;
  return (
    <div>
      <Filter filterText={filterText} onChange={change} count={filteredUsers.length} />
      <ul className="users">
        {filteredUsers.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: usersSelector(state),
  filterText: filterTextSelector(state),
});

const mapDispatch = {
  change: changeFilter,
};

export default connect(mapState, mapDispatch)(UsersList);
