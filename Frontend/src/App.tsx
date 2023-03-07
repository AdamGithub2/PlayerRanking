import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Scores from "./pages/Scores";

function App() {
  const [name, setName] = useState("");
  const [refreshing, setRefreshing] = useState(0);

  const fetchData = async () => {
    await fetch("http://localhost:3001/add", {
      method: "GET",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>
            <h5>Search by nick</h5>
            <input
              value={name}
              style={{ fontSize: 30 }}
              onChange={(e) => setName(e.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <h5>generate random user</h5>
            <button onClick={() => fetchData()} style={{ fontSize: 30 }}>
              {" "}
              Add{" "}
            </button>
          </div>
          <div>
            <h5>refreshing per secconds</h5>
            <input
              value={refreshing}
              style={{ fontSize: 30 }}
              onChange={(e) => setRefreshing(Number(e.target.value))}
              min="0"
              type={"number"}
            />
          </div>
        </div>

        <Scores numberPerPage={10} refreshing={refreshing} />
      </header>
    </div>
  );
}

export default App;
