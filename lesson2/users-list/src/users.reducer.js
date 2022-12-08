import { USER_ADD, USER_DELETE } from './users.actions.js';

export const userReducer = (state = { userList: [] }, action) => {
  switch (action.type) {
    case USER_ADD:
      return { ...state, userList: state.userList.concat(action.payload) };
    case USER_DELETE:
      return { ...state, userList: state.userList.filter(user => user.id !== action.payload.id) };
    default:
      return state;
  }
};
