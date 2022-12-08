import { addProduct } from './cart.actions.js';
import store from './store.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct({ id: 76, name: 'milk' }));
