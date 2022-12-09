export const mapStateToProps = state => {
  const { usersList: users, currentPage } = state.users;
  const totalItems = users.length;
  return {
    users,
    currentPage,
    totalItems,
  };
};
