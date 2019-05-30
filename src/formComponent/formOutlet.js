import React from "react";

export default class FormOutlet extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { name, value, type, check } = event.target;
    console.log(type);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          placeholder="First Name"
          onChange={this.onChange}
        />
      </form>
    );
  }
}
