import React, { useState } from "react";


export default function Todo(props) {

    const [input, setInput] = useState('');
  
    const addTodo = (todo) => {
      // const newTodo = {id: Math.random(), todo: todo};
      // clears input
      setInput("");

      props.addTodoCallback(todo);
    }
  
    return (
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
    );
  }
  
