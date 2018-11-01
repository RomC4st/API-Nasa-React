import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import AffichageA from "./AffichageA.js";

class Asteroides extends Component {
  state = {
    date: ``
  };

  handleChange = e => {
    this.setState({ date: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Asteroides</h1>
        <form className="form">
          <label>
            Input1
            <Input
              style={{
                marginBottom: "2em",
                marginLeft: "1em",
                width: "20em",
                color: "white"
              }}
              placeholder=": YYYY-MM-JJ"
              onChange={this.handleChange}
            />
            Input2
            <Input
              style={{
                marginBottom: "2em",
                marginLeft: "1em",
                width: "20em",
                color: "white"
              }}
              placeholder=" : YYYY-MM-JJ"
              onChange={this.handleChange}
            />
          </label>
        </form>
        <AffichageA date={this.state.date} />
      </div>
    );
  }
}

export default Asteroides;
