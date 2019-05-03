import React from "react";
import "./_ExploreContainer.scss";
import Button from "../Button/Button";

class ExploreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      people: {}
    };
  }

  updatePeople = people => {
    console.log(people);
    console.log("UpdateTopic has been fired");
    this.setState({ people });
  };

  render() {
    console.log(this.state);
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <Button updatePeople={this.updatePeople} label={"PEOPLE"} />
          <Button updatePeople={this.updatePeople} label={"PLANETS"} />
          <Button updatePeople={this.updatePeople} label={"VEHICLES"} />
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
