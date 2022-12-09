import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Users from './users/UsersList.jsx';

const App = () => (
  <Provider store={store}>
    <Users />
  </Provider>
);

export default App;
