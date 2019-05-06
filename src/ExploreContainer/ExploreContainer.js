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
      favorites: [],
      currentTopic: ""
    };
  }

  updateState = (targetState, newState) => {
    this.setState({ [targetState]: newState, currentTopic: targetState });
  };

  addToFavorites = newFavorite => {
    const { favorites } = this.state;
    if (!favorites.includes(newFavorite)) {
      this.setState({ favorites: [...favorites, newFavorite] });
    }
  };

  renderFavorites = () => {
    // const { favorites } = this.props;
    // favorites.map(favorite => {
    //   return;
    // });
  };

  render() {
    const { people, planets, vehicles, currentTopic, favorites } = this.state;
    return (
      <section className="card-container">
        <i className="fas fa-caret-down fa-10x" />
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
        <button className="view-favorites" onClick={this.renderFavorites}>
          View Favorites
        </button>
        <CardContainer
          addToFavorites={this.addToFavorites}
          currentTopic={currentTopic}
          favorites={favorites}
          vehicles={vehicles}
          people={people}
          planets={planets}
        />
      </section>
    );
  }
}

export default ExploreContainer;
