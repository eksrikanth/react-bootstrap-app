import React from "react";

export default class FormOutlet extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      isFriendly: false,
      pic: "",
      gender: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0]);
        let user = data.results[0];
        this.setState({
          firstname: user.name.first,
          lastname: user.name.last,
          isFriendly: true,
          gender: user.gender,
          pic: user.picture.large,
          address:
            "Street: " +
            user.location.street +
            "\n" +
            "City: " +
            user.location.city +
            "\n" +
            "State: " +
            user.location.state +
            "\n" +
            "ZipCode: " +
            user.location.postcode
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
        <br /> <br />
        <label>
          Address:
          <textarea
            style={{ width: 300, height: 150 }}
            name="address"
            value={this.state.address}
            placeholder="Address"
            onChange={this.onChange}
          />
        </label>
        <br /> <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.onChange}
          />{" "}
          Is Friendly
        </label>
        <br /> <br />
        <label>
          <input
            type="radio"
            name="gender"
            value={this.state.gender}
            checked={this.state.gender === "male"}
            onChange={this.onChange}
          />{" "}
          Male
        </label>
        <br /> <br />
        <label>
          <input
            type="radio"
            name="gender"
            value={this.state.gender}
            checked={this.state.gender === "female"}
            onChange={this.onChange}
          />{" "}
          Female
        </label>
        <br /> <br />
        <img name="pic" src={this.state.pic} />
        <br /> <br />
        Your name: {this.state.firstname} {this.state.lastname}
      </form>
    );
  }
}
