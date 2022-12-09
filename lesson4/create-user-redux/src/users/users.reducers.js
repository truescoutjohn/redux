import { ADD_USER, DELETE_USER } from './users.actions.js';

export const usersReducer = (state = { users: { userList: [] } }, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: {
          userList: state.users.userList.concat(action.payload.userData),
        },
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: {
          userList: state.users.userList.filter(user => user.id !== action.payload.id),
        },
      };
    }
    default: {
      return state;
    }
  }
};
