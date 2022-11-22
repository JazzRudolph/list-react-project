import React from "react";

export default function App() {
  const today = new Date();
  const date = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <div className="">
      <p>{date}</p>
    </div>
  );
}