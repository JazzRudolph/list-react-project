import React, { useState } from 'react';

export default function List(props) {

  const list = props.list;
  
    return (
      <div>
        <h1> List </h1>
        <ul>
          {list.map((todo) =>(
            <li key={todo.id}>
              {todo.todo}
              <button>Delete</button>
              <button>Priority</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
