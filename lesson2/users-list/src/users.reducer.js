import { USER_ADD, USER_DELETE } from './users.actions.js';

export const userReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case USER_ADD:
      return { ...state, usersList: state.usersList.concat(action.payload) };
    case USER_DELETE:
      return { ...state, usersList: state.usersList.filter(user => user.id !== action.payload.id) };
    default:
      return state;
  }
};
