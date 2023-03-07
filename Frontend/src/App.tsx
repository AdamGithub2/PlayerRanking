import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Scores from "./pages/Scores";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scores numberPerPage={10} />
      </header>
    </div>
  );
}

export default App;
