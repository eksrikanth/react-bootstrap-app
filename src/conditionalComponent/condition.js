import React from "react";

function Condition(props) {
  if (props.isLoading === true) return <h1>Loading...</h1>;
  else {
    return <h3>conditional output rendered...</h3>;
  }
}
// repository test successfull.
export default Condition;
