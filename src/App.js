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
  const [count, setCount] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const send = function () {
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => setDestinations(json));
  };
  const selectDestinations = function () {
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <TodoList>button</TodoList>

      <button className="btn" onClick={TodoList}>
        Open
      </button>

      <button
        className="btn"
        aria-label="clickable orange button"
        onClick={send}
      >
        Send
      </button>
      <br></br>
      <br></br>
      <img src={logo} className="App-logo" alt="logo" />
      <p> {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {destinations.map((destinations) => (
        <div onClick={selectDestinations}>{destinations.name}</div>
      ))}
    </div>
  );
}

//const App = () => {
// return <div className="App">test</div>;
//};

export default App;
