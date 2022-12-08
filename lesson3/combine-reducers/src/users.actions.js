export const USER_ADD = 'USER/ADD';
export const USER_UPDATE = 'USER/UPDATE';
export const USER_DELETE = 'USER/DELETE';

export const addUser = userData => ({ type: USER_ADD, payload: { userData } });
export const updateUser = (userId, userData) => ({
  type: USER_UPDATE,
  payload: { userId, userData },
});
export const deleteUser = userId => ({ type: USER_DELETE, payload: { userId } });
