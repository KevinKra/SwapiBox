import React from "react";
import "./_App.scss";
import SplashContainer from "./SplashContainer/SplashContainer";
import ExploreContainer from "./ExploreContainer/ExploreContainer";
import { clearRandomMovie } from "./utilities";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      randomMovie: {}
    };
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomNumber}`)
      .then(response => response.json())
      .then(result => clearRandomMovie(result))
      .then(result => this.setState({ randomMovie: { ...result } }))
      .catch(() => console.log("unsuccessful film crawl fetch"));
  }

  render() {
    return (
      <div className="App">
        <SplashContainer />
        <ExploreContainer />
      </div>
    );
  }
}

export default App;
