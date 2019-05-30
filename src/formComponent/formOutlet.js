import React from "react";

export default class FormOutlet extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { name, value, type, check } = event.target;
    this.setState({ [name]: value });
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0]);
        let user = data.results[0];
        this.setState({
          firstname: user.name.first,
          lastname: user.name.last
        });
      });
  }
  render() {
    return (
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            placeholder="First Name"
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            placeholder="Last Name"
            onChange={this.onChange}
          />
        </label>
        <br />
        Your name: {this.state.firstname} {this.state.lastname}
      </form>
    );
  }
}
