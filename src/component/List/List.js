import React, { useState } from 'react';

export default function List(props) {

  const list = props.list;

  const [deleteitem, setDeleteitem] = useState([]);

return (
  <div>
    <div>
      {deleteitem.map((deleteitem, index) => (
        <div>
          <button
            onClick={() =>
              setDeleteitem(deleteitem.filter((_, ind) => ind !== index))} name="remove">{deleteitem}
          </button>
        </div>
      ))}
    </div>
    <div
      onSubmit={(e) => {
        e.preventDefault();
        const ulData = new ulData(e.currentTarget);
        setDeleteitem((deleteitem) => [...deleteitem, ulData.get("remove")]);
        e.currentTarget.requestFullscreen();
      }}
    >
      {list.map((todo) => (
        <div key={todo.id}>
          {todo.todo}
          <button>Priority</button>
          <button>Completed </button>
        </div>
      ))}

    </div>
  </div>
);
      }
