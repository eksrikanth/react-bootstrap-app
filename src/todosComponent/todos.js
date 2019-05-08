import React from "react";

function Todos(props) {
  return (
    <div>
      <h3 className="form-control">
        <input type="checkbox" defaultChecked={props.todo.completed} /> .
        {props.todo.text}
      </h3>
    </div>
  );
}

export default Todos;
