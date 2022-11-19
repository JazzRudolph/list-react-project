import React, { useState } from 'react';

function List(props) {

  const list = props.list;
  
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
  
  export default List;