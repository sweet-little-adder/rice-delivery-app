import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [lidStatus, setLidStatus] = useState({});
  const [destination, setDestination] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState();
  const [deliveryStatus, setDeliveryStatus] = useState();

  //const selectDestination = function (dest) {
  // setSelectedDestination(dest);
  //};

  useEffect(() => {
    setLidStatus("close");
    setDeliveryStatus("stopped");
    setSelectedDestination('Home');
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => setDestinations(json));
  }, []);

  const setlid = function (action) {
    setLidStatus(action + "ing");
    //auto back home when lip closed
    if (selectedDestination !== 'Home' && action === 'close') {
      setSelectedDestination('Home')
      setDeliveryStatus('going');
    }
    axios
      .post("http://localhost:3001/set-lid", { lid: action })
      .then((res) => {
        console.log("Lid Open", res);
        setLidStatus(action);
        setDeliveryStatus('stopped')
      })
      .catch((err) => console.log(err));
  };
  const setgoal = function (waypoint) {
    setDeliveryStatus("going");
    setSelectedDestination(waypoint);
    axios
      .post("http://localhost:3001/set-goal", { waypoint })
      .then((res) => {
        setDeliveryStatus("stopped");
        setLidStatus('open')
        console.log("Set goal", res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      {lidStatus === "close" && (
        <button className="btn-big" onClick={() => setlid("open")}>
          𝓞𝓹𝓮𝓷 𝓵𝓲𝓭
        </button>
      )}

      {lidStatus === "open" && (
        <button
          className="btn-big"
          aria-label="clickable orange button"
          onClick={() => setlid("close")}
        >
          𝓒𝓵𝓸𝓼𝓮 𝓵𝓲𝓭
        </button>
      )}

      {lidStatus !== "open" && lidStatus !== "close" && lidStatus + " lip..."}

      {(deliveryStatus === "going" && selectedDestination !== undefined) && (
        <div>{"going to " + selectedDestination + "..." }<p><img src={logo} className="App-logo" alt="logo" /></p></div>
      )}
      {
        (deliveryStatus === "stopped" && selectedDestination !== undefined) &&
        (
          <div>{"I am at " + selectedDestination + "..."}</div>
        )
      }

     
      
      {lidStatus === "close" &&
        destinations.map((dest) => (
          <>
          {
            dest.name !== 'Home' &&
            <div className="App" onClick={() => setgoal(dest.name)}>
              <button className="btn">{dest.name}</button>
            </div>
          }
          </>
        ))
      }
    </div>
  );
}

//const App = () => {
// return <div className="App">test</div>;
//};

export default App;
