import React from 'react';
import './App.css';
import Counters from './components/counters';

function App() {
  return (
    <div className="App">
      <header className="left">Below is the list of the items</header>
      <header className="right">Total</header>
      <div className="counters">
          <Counters/>
      </div>
    </div>
  );
}

export default App;
