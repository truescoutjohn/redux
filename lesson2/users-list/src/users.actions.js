export const USER_ADD = 'USER/ADD';
export const USER_DELETE = 'USER/DELETE';

export const addUser = user => ({ type: USER_ADD, payload: user });
export const deleteUser = id => ({ type: USER_DELETE, payload: { id } });
