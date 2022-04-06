import React, { useEffect, useState } from "react";

export default function TodoList(destination) {
const [todos, setTodos] = useState([]);
useEffect(() => {
fetch("http://localhost:3001/set-goal", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
waypoint: destination,
}),
})
.then((res) => res.json())
.then((result) => setData(result.rows))
.catch((err) => console.log("error"));
}, []);
}

//POST
const open = () => {
fetch("http://localhost:3001/set-lid", {
method: "POST",
headers: {
lid: string(open, close),
},
body: JSON.stringify({
lid: open,
close,
}),
})
.then((res) => res.json())
.then((result) => setData(result.rows))
.catch((err) => console.log("error"));
};
