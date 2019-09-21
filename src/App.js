import React from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="counters">
        <Counters />
      </div>
    </div>
  );
}

export default App;
