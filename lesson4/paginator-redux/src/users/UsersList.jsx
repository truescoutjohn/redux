import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { nextPage, prevPage } from './users.actions.js';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ users, nextPage, prevPage, currentPage, totalItems }) => {
  const goPrev = () => {
    if (currentPage <= 1) {
      prevPage(1);
      return null;
    }
    prevPage(currentPage - 1);
  };

  const goNext = () => {
    const maxPage = Math.ceil(totalItems / ITEMS_PER_PAGE);

    if (currentPage >= maxPage) {
      nextPage(maxPage);
      return null;
    }

    nextPage(currentPage + 1);
  };

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE;

  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      <ul className="users">
        {users.usersList.slice(from, to).map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users,
    currentPage: state.users.currentPage,
    totalItems: state.users.usersList.length,
  };
};

const mapDispatch = dispatch => {
  return {
    nextPage: currentPage => dispatch(nextPage(currentPage)),
    prevPage: currentPage => dispatch(prevPage(currentPage)),
  };
};

export default connect(mapState, mapDispatch)(UsersList);
