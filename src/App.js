import React, { useState } from 'react';
import './App.css';
import List from './component/List/List';
import Todo from './component/Todo/Todo';
import Date from './component/Date/Date';
import Time from './component/Time/Time';


function App() {
  const [listitem, setListitem] = useState([{
    id: Math.random(),
    todo: 'first item'
  }]);
  

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    };
    // add to the list
    setListitem([...listitem, newTodo]);
  }


  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Todays Errands
        </h1>
        <p><em><Date /> <Time /></em></p>

      </header>
      <main>
        <Todo addTodoCallback={addTodo} />        
        <List list={listitem} />
      </main>
    </div>
  );
}

export default App;
