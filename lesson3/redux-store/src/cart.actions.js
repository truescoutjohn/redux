export const ADD_PRODUCT = 'PRODUCT/ADD';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE';

export const addProduct = product => ({ type: ADD_PRODUCT, payload: { product } });
export const removeProduct = id => ({ type: REMOVE_PRODUCT, payload: { id } });
