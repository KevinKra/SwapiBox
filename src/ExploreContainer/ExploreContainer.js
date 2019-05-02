import React from "react";
import "./_ExploreContainer.scss";
import Button from "../Button/Button";

class ExploreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTopic: {}
    };
  }

  componentDidMount() {
    this.fetchAllData();
  }

  updateTopic = newTopic => {
    this.setState({ currentTopic: newTopic });
  };

  fetchAllData = () => {
    const urls = [
      `https://swapi.co/api/people`,
      `https://swapi.co/api/planets`,
      `https://swapi.co/api/vehicles`,
      `https://swapi.co/api/species`
    ];
    const resolvedPromises = urls.map(url =>
      fetch(url).then(response => response.json())
    );
    Promise.all(resolvedPromises).then(response => console.log(response));
  };

  render() {
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <Button label={"PEOPLE"} />
          <Button label={"PLANETS"} />
          <Button label={"VEHICLES"} />
        </div>
        <a className="view-favorites" href="">
          View Favorites
        </a>
        <div className="card-section">
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
        </div>
      </section>
    );
  }
}

export default ExploreContainer;
