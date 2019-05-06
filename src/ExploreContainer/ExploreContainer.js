import React from "react";
import "./_ExploreContainer.scss";
import Button from "../Button/Button";
import CardContainer from "../CardContainer/CardContainer";

class ExploreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      vehicles: {},
      currentTopic: ""
    };
  }

  updateState = (targetState, newState) => {
    console.log(targetState);
    console.log("UpdateState has been fired");
    this.setState({ [targetState]: newState, currentTopic: targetState });
  };

  render() {
    console.log(this.state);
    const { people, planets, vehicles, currentTopic } = this.state;
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <Button
            className="btn-1"
            updateState={this.updateState}
            label={"PEOPLE"}
          />
          <Button
            className="btn-1"
            updateState={this.updateState}
            label={"PLANETS"}
          />
          <Button
            className="btn-1"
            updateState={this.updateState}
            label={"VEHICLES"}
          />
        </div>
        <a className="view-favorites" href="">
          View Favorites
        </a>
        <CardContainer
          currentTopic={currentTopic}
          vehicles={vehicles}
          people={people}
          planets={planets}
        />
      </section>
    );
  }
}

export default ExploreContainer;
