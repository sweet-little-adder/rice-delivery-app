import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import waypoints from "./waypoints";
import TodoList from "./todolist";
import { useState } from "react";
//import { motion } from "framer-motion";

//export const MyComponent = () => (
//  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />
//);

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
  const open = function () {
    `lid`: string (`open`, `close`);
  };
  return (
    <div className="App">
      <button className="btn" onClick={send}>
        𝓞𝓹𝓮𝓷
      </button>
      <button
        className="btn"
        aria-label="clickable orange button"
        onClick={send}
      >
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
    </div>
  );
}

//const App = () => {
// return <div className="App">test</div>;
//};

export default App;
