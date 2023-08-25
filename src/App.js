import React, { useState } from "react";
import "./App.css";

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
    <div className="App">
      <h1>To Do List</h1>

      <div>
        <div className="List">
          <input
            className="Input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="Add" onClick={() => addTodo(input)}>
            Add
          </button>
        </div>

        <div className="Elements">
          <ul>
            {list.map((todo) => (
              <li key={todo.id}>
                {todo.todo}
                <button className="Delete" onClick={() => deleteTodo(todo.id)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
