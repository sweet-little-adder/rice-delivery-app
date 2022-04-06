import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import waypoints from "./waypoints";
import TodoList from "./todolist";
//import React, { useEffect, useState } from "react";
//import { motion } from "framer-motion";

//export const MyComponent = () => (
//  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />
//);

function App() {
  return (
    <div className="App">
      <TodoList>button</TodoList>

      <button onClick={TodoList}>Open</button>

      <button
        className="buttoncontainersymbol"
        aria-label="clickable orange button"
      >
        Send
      </button>
      <br></br>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

//const App = () => {
// return <div className="App">test</div>;
//};

export default App;
