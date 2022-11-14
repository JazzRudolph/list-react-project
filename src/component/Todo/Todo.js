import React, { useState } from "react";

function App() {

    const [input, setInput] = useState;
  
    const addTodo = (todo) => {
      const newTodo = {id: Math.random(), todo: todo};
      // clears input
      setInput("");
    }
  
    return (
      <div>
        <h1> List </h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => addTodo(input)}>Add</button>
        <ul>
          {addTodo.map((todo) =>(
            <li key={todo.id}>
              {todo.todo}
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App