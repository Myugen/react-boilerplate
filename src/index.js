import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "./style/global.scss";

class App extends React.Component {
  state = {
    CaptainKirkBio: {}
  };

  componentDidMount() {
    this.onGetKirkBio();
  }

  onGetKirkBio = async () => {
    try {
      const response = await axios.post(
        "http://stapi.co/api/v1/rest/character/search",
        { title: "James T. Kirk", name: "James T. Kirk" },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      const result = await response.data;
      const character = result.characters[0];
      this.setState({ CaptainKirkBio: character });
    } catch (error) {
      console.error("error", error);
    }
  };
  render() {
    const { CaptainKirkBio } = this.state;
    return (
      <div className="app">
        <img
          alt="header"
          src="/dist/images/header.jpeg"
          className="app-header"
        />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you
          know that? I frequently have my doubts. I dont. Not any more. And
          maybe in a thousand years or so, we will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: "break-all" }}>
              {JSON.stringify(CaptainKirkBio)}
            </p>
          )}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
