import React from 'react';
import { ThemesContext } from './themes.js';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        className="btn"
        style={{ color: this.context.fontColor, background: this.context.background }}
        onClick={this.props.onClick}
      />
    );
  }
}
ThemedButton.contextType = ThemesContext;
export default ThemedButton;
