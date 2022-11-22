import React, { useState } from 'react';
import './App.css';
import List from './component/List/List';
import Todo from './component/Todo/Todo';
import Date from './component/Date/Date';
import Time from './component/Time/Time';


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

        <h1>
          Todays Errands
        </h1>
        <p><Date /> & <Time /></p>

      </header>
      <main>
        <Todo addTodoCallback={addTodo} />        
        <List list={list} />
      </main>
    </div>
  );
}

export default App;
