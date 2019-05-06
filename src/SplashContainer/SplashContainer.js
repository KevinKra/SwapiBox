import React from "react";
import "./_SplashContainer.scss";
import { clearRandomMovie } from "../utilities";
import Crawl from "react-star-wars-crawl";
import "react-star-wars-crawl/lib/index.css";

class SplashContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      randomMovie: {},
      collapse: false
    };
  }

  componentDidMount() {
    setTimeout(this.toggle, 15000);
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomNumber}`)
      .then(response => response.json())
      .then(result => clearRandomMovie(result))
      .then(result => this.setState({ randomMovie: { ...result } }))
      .catch(() => console.log("unsuccessful film crawl fetch"));
  }

  toggle = () => {
    this.setState({ collapse: true });
  };

  render() {
    let { summary, title, releaseDate } = this.state.randomMovie;
    let className = "splash-container";
    if (this.state.collapse === true) {
      className += " condense";
    }
    return (
      <section className={className}>
        <div className="title-content">
          <h1>Swapi-Box</h1>
          <p>Explore the StarWars Universe</p>
        </div>
        <Crawl>
          <div className="film-prologue">
            <h1 className="movie-title">{title}</h1>
            <p>{summary}</p>
            <p className="movie-year">{releaseDate}</p>
          </div>
        </Crawl>
      </section>
    );
  }
}

export default SplashContainer;
