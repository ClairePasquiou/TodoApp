import React, { useState } from "react";

export default function App() {
  let [list, setList] = useState([]);
  let [input, setInput] = useState("");

  return(
  <div>
    <h1>Todo List</h1>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    <button>Add</button>
  </div>
  );
}
