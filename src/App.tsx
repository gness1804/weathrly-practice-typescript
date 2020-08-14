import React from 'react';
import './App.css';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weathrly</h1>
        <Main cityText="Enter your City" />
        <p>Built just in time...</p>
      </header>
    </div>
  );
}

export default App;
