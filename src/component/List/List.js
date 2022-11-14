import React, { useState } from 'react';

function App() {

    const [list, setList] = useState;
    
  
    const addTodo = (todo) => {
      const newTodo = {id: Math.random(), todo: todo};
      // add to the list
      setList([...list, newTodo]);
    }
  
    return (
      <div>
        <h1> List </h1>
        <ul>
          {list.map((todo) =>(
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