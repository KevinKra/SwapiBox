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

  updateTopic = newTopic => {
    this.setState({ currentTopic: newTopic });
  };

  render() {
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <Button updateTopic={this.updateTopic} label={"PEOPLE"} />
          <Button updateTopic={this.updateTopic} label={"PLANETS"} />
          <Button updateTopic={this.updateTopic} label={"VEHICLES"} />
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
