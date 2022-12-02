import React from "react";

export default function App() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="">
      <p>{date}</p>
    </div>
  );
}