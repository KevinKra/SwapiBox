import React from "react";
import "./_ExploreContainer.scss";
import Button from "../Button/Button";

class ExploreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {}
    };
  }

  updatePeople = people => {
    console.log(people);
    console.log("UpdateTopic has been fired");
    this.setState({ people });
  };

  updateState = (targetState, newState) => {
    console.log(targetState);
    console.log("UpdateState has been fired");
    this.setState({ [targetState]: newState });
  };

  render() {
    console.log(this.state);
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <Button updateState={this.updateState} label={"PEOPLE"} />
          <Button updateState={this.updateState} label={"PLANETS"} />
          <Button updateState={this.updateState} label={"VEHICLES"} />
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
