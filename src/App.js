import React, { useState } from 'react';
import './App.css';
import List from './component/List/List';
import Todo from './component/Todo/Todo';

function App() {
  const [list, setList] = useState([{
    id: Math.random(),
    todo: 'first item'
  }]);
  

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    };
    // add to the list
    setList([...list, newTodo]);
  }


  return (
    <div className="App">
      <header className="App-header">

        <p>
          
          Hey Jazzy what are you doing?

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <List list={list} />
        <Todo addTodoCallback={addTodo} />        
      </main>
    </div>
  );
}

export default App;
