import { connect } from 'react-redux';
import Options from './Options.jsx';
import { availableOptionsSelector } from './options.selectors.js';
import { toggleOption } from './options.actions.js';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = dispatch => ({
  moveOption: optionId => dispatch(toggleOption(optionId)),
});

export default connect(mapState, mapDispatch)(Options);
