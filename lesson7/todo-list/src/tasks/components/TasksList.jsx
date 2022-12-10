import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as tasksAction from '../tasks.actions.js';
import { getTasksList } from '../tasks.selectors.js';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    const sortedTasks = this.props.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {sortedTasks.map(task => (
            <Task
              key={parseInt(task.id)}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  tasks: getTasksList(state),
});

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TasksList);
