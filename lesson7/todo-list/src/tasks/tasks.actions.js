import * as taskGateway from './tasksGateway.js';
export const TASKS_LIST_RECEIVED = 'TASKS/RECEIVED';

export const tasksListReceived = tasksList => ({
  type: TASKS_LIST_RECEIVED,
  payload: { tasksList },
});

export const getTaskList = () => {
  return dispatch => {
    taskGateway.fetchTasksList().then(tasksList => dispatch(tasksListReceived(tasksList)));
  };
};

export const updateTask = id => {
  return (dispatch, getState) => {
    const state = getState();
    const task = state.tasks.tasksList.find(task => task.id === id);
    task.done = !task.done;
    taskGateway.updateTask(id, task).then(() => dispatch(getTaskList()));
  };
};

export const createTask = text => {
  return dispatch => {
    const task = { done: false, text };
    taskGateway.createTask(task).then(() => dispatch(getTaskList()));
  };
};

export const deleteTask = id => {
  return dispatch => {
    taskGateway.deleteTask(id).then(() => dispatch(getTaskList()));
  };
};
