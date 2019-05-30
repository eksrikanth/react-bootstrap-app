import React from "react";

export default class ButtonLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }
  render() {
    let buttontext = this.state.isLoggedIn ? "Log In" : "Log Out";
    let htext = this.state.isLoggedIn ? "Logged Out" : "Logged IN";
    return (
      <div>
        <button onClick={this.handleClick}>{buttontext}</button>
        <br />
        <h3> You are {htext}</h3>
      </div>
    );
  }
}
