import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

export const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, products: state.products.concat(action.payload.product) };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
};
