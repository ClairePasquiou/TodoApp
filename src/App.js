import React, { useState } from "react";

export default function App() {
  let [list, setList] = useState([]);
  let [input, setInput] = useState("");

  let addTodo = (todo) => {
    let newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  let deleteTodo = (id) => {
    let newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
