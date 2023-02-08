import React from "react";

export default class MyHeader extends React.Component {
  render() {
    const mystyle = {
      backgroundColor: "DodgerBlue",
      padding: "10px",
      border: "1px solid black",
      height: "1080px",
      width: "822px",
    };
    return (
      <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
