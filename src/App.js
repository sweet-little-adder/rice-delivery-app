import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import waypoints from "./waypoints";
import TodoList from "./todolist";
import { useState } from "react";
import axios from "axios";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({});
  const [lid, setLid] = useState({});
  const [destination, setDestination] = useState([]);

  const send = function () {
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => setDestinations(json));
  };
  const selectDestination = function (dest) {
    setSelectedDestination(dest);
  };
  const setlid = function (action) {
    axios
      .post("http://localhost:3001/set-lid", { lid: "open" })
      .then((res) => console.log("Lid Open", res))
      .catch((err) => console.log(err));
  };
  const setgoal = function (action) {
    axios
      .post("http://localhost:3001/set-goal", { waypoint: { destination } })
      .then((res) => console.log("Set goal", res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button className="btn" onClick={() => setlid("open")}>
        𝓞𝓹𝓮𝓷
      </button>
      <button
        className="btn"
        aria-label="clickable orange button"
        onClick={send}
      >
        𝓬𝓵𝓸𝓼𝓮
      </button>
      <button
        className="btn"
        aria-label="clickable orange button"
        onClick={() => setlid("open")}
      >
        𝓬𝓵𝓸𝓼𝓮
      </button>
      <br></br>
      <br></br>
      <img src={logo} className="App-logo" alt="logo" />
      {destinations.map((dest) => (
        <div
          className="btn"
          onClick={(() => selectDestination(dest), setgoal(dest))}
        >
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
