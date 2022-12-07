import React, { useContext } from 'react';
import { ThemesContext } from './themes.js';

const ThemedButton = ({ text, onClick }) => {
  const theme = useContext(ThemesContext);
  return (
    <button
      className="btn"
      style={{ color: theme.fontColor, background: theme.background }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ThemedButton;
