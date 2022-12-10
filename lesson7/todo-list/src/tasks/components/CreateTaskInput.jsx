import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTask } from '../tasks.actions.js';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.createTask(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className=" btn create-task__btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  createTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);

CreateTaskInput.propTypes = {
  createTask: PropTypes.func.isRequired,
};
