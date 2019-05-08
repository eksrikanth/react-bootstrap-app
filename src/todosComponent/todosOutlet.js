import React from "react";
import todoData from "../todosComponent/todos-data";
import Todos from "../todosComponent/todos";

function TodoOutlet() {
  const todoComponent = todoData.map((td, index) => {
    return <Todos key={index} todo={td} />;
  });

  return <div> {todoComponent} </div>;
}

export default TodoOutlet;
