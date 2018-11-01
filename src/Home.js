import React, { Component } from "react";
import Affichage from "./Affichage";
import Input from "@material-ui/core/Input";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ``
    };
  }

  handleChange = e => {
    this.setState({ date: e.target.value });
  };

  render() {
    return (
      <div className="BodyHome">
        <h1>Welcome</h1>
        <form className="form">
          <label>
            Date de la photo:
            <Input
              style={{
                marginBottom: "2em",
                marginLeft: "1em",
                width: "20em",
                color: "white"
              }}
              placeholder="Format de la date : YYYY-MM-JJ"
              onChange={this.handleChange}
            />
          </label>
        </form>
        <Affichage date={this.state.date} />
      </div>
    );
  }
}

export default Home;
