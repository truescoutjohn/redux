import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions.js';

const Counter = ({ counter, increment, decrement, reset }) => (
  <div className="counter">
    <button className="counter__button" onClick={decrement}>
      -
    </button>
    <span className="counter__value" onClick={reset}>
      {counter}
    </span>
    <button className="counter__button" onClick={increment}>
      +
    </button>
  </div>
);

const mapState = state => ({
  counter: state,
});

const mapDispatch = {
  increment,
  decrement,
  reset,
};

export default connect(mapState, mapDispatch)(Counter);
