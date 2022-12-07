import React, { useState } from 'react';
import ThemedButton from './ThemedButton.jsx';
import { ThemesContext, themes } from './themes.js';

const App = () => {
  const [fetchedThemes, setFetchedThemes] = useState(themes.light);

  const toggleTheme = () => {
    setFetchedThemes(prevState => (prevState === themes.dark ? themes.light : themes.dark));
  };

  return (
    <div>
      <ThemesContext.Provider value={fetchedThemes}>
        <ThemedButton text="Dynamic Theme" onClick={toggleTheme} />
      </ThemesContext.Provider>
      <ThemedButton text="Default Theme" onClick={toggleTheme} />
    </div>
  );
};

export default App;
