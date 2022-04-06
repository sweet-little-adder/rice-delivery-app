import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import waypoints from "./waypoints";
import TodoList from "./todolist";
import { useState } from "react";
import setlid from "./setlid";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({});
  const send = function () {
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => setDestinations(json));
  };
  const selectDestination = function (dest) {
    setSelectedDestination(dest);
  };
  const setlid = function () {
    <setlid />;
  };
  return (
    <div className="App">
      <button className="btn" onClick={setlid}>
        𝓞𝓹𝓮𝓷
      </button>
      <button
        className="btn"
        aria-label="clickable orange button"
        onClick={send}
      >
        𝓬𝓵𝓸𝓼𝓮
      </button>
      <button className="btn" aria-label="clickable orange button">
        𝓬𝓵𝓸𝓼𝓮
      </button>
      <br></br>
      <br></br>
      <img src={logo} className="App-logo" alt="logo" />
      {destinations.map((dest) => (
        <div className="btn" onClick={() => selectDestination(dest)}>
          {dest.name}
        </div>
      ))}
      {selectedDestination.name}
      <setlid />
    </div>
  );
}

//const App = () => {
// return <div className="App">test</div>;
//};

export default App;
