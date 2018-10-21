import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Affichage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ``,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = props => {
    let Url = `https://api.nasa.gov/planetary/apod?date=${
      this.props.date
    }&api_key=dzKZFlHzkaXWbU949H6OGSEetJZrFD3e5gZLqshm`;
    let UrlEncodé = Url.replace("%20", "");

    fetch(UrlEncodé)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.props.date);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Button
            theme={this.createMuiTheme}
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
            onClick={this.componentDidMount}
          >
            Envoyer
          </Button>

          <ul>
            <li>
              Copyright : {items.copyright} {items.date}
            </li>
            <li>{items.explanation}</li>
            <li>
              <img
                className="imageResponsive"
                src={items.url}
                alt={items.title}
              />
            </li>
            <li>{items.title}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Affichage;
