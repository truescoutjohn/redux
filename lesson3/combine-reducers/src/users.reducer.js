import { USER_ADD, USER_UPDATE, USER_DELETE } from './users.actions.js';

export const usersReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case USER_ADD: {
      return { ...state, usersList: state.usersList.concat(action.payload.userData) };
    }
    case USER_UPDATE: {
      const { userId, userData } = action.payload;
      return {
        ...state,
        usersList: state.usersList.map(user =>
          user.id === userId ? { ...user, ...userData } : user,
        ),
      };
    }
    case USER_DELETE: {
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    }
    default:
      return state;
  }
};
