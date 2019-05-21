import React from "react";
import todoData from "../todosComponent/todos-data";
import Todos from "../todosComponent/todos";

class TodoOutlet extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArr: todoData
    };
  }

  render() {
    const todoComponent = this.state.todoArr.map((td, index) => {
      return <Todos key={index} todo={td} />;
    });
    return <div> {todoComponent} </div>;
  }
}

export default TodoOutlet;
