import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Counter from './Counter.jsx';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
