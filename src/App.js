import React from 'react';
import './App.css';
import UserHaiku from './components/UserHaiku';
import Haiku from './components/Haiku';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Haiku />
        <UserHaiku />
      </header>
    </div>
  );
}

export default App;
