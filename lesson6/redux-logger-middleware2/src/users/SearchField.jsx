import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSpinner, userDataReceived } from './user.actions.js';
import { getUserData } from './user.gateway.js';

class SearchField extends Component {
  state = {
    userName: '',
  };

  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.showSpinner();
    getUserData(this.state.userName).then(userData => {
      this.props.userDataReceived(userData);
    });
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  showSpinner,
  userDataReceived,
};

export default connect(null, mapDispatch)(SearchField);
