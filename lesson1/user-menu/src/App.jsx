import React from 'react';
import { AppContext } from './init-appcontext.js';
import Header from './Header.jsx';

class App extends React.Component {
  state = {
    userData: { name: 'Nikola Tesla', avatar_url: 'https://avatars3.githubusercontent.com/u10001' },
  };
  render() {
    return (
      <div className="page">
        <AppContext.Provider value={this.state.userData}>
          <Header />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
