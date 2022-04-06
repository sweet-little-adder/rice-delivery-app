import React, { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/map-waypoints")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
}
