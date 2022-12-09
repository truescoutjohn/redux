export const ADD_USER = 'USER/ADD';
export const DELETE_USER = 'USER/DELETE';

export const addUser = userData => ({ type: ADD_USER, payload: { userData } });
export const deleteUser = id => ({ type: DELETE_USER, payload: { id } });
