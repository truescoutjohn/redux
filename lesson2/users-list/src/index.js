import { addUser, deleteUser } from './users.actions.js';
import store from './store.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));
