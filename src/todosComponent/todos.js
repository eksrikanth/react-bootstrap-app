import React from "react";

class Todos extends React.Component {
  render() {
    return (
      <div>
        <h3 className="form-control">
          <input type="checkbox" defaultChecked={this.props.todo.completed} /> .
          {this.props.todo.text}
        </h3>
      </div>
    );
  }
}

export default Todos;
