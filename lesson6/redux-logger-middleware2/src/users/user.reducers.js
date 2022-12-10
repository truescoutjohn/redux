import { USER_DATA_RECEIVED, SHOW_SPINNER } from './user.actions.js';
const initialState = {
  users: { userData: null, isFetching: false },
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_RECEIVED: {
      return {
        ...state,
        users: { ...state.users, userData: action.payload.userData, isFetching: false },
      };
    }
    case SHOW_SPINNER: {
      return {
        ...state,
        users: { ...state.users, isFetching: true },
      };
    }
    default: {
      return state;
    }
  }
};
