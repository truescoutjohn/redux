import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ userId: 76, name: 'Sarah' }));
store.dispatch(updateUser(76, { name: 'Tom' }));
store.dispatch(deleteUser(76));
