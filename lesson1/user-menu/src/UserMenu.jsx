import React from 'react';
import { AppContext } from './init-appcontext.js';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {this.context.name}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }

  static contextType = AppContext;
}

export default UserMenu;
