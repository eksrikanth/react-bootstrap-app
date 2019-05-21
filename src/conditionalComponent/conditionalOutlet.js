import React from "react";
import Condition from "./condition";

export default class ConditionalOutlet extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return <Condition isLoading={this.state.isLoading} />;
  }
}
