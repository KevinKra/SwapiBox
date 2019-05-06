import React from "react";
import Card from "../Card/Card";
import "./_CardContainer.scss";

class CardContainer extends React.Component {
  renderCards = () => {
    const { currentTopic } = this.props;
    if (currentTopic === "") {
      return null;
    } else if (currentTopic === "people") {
      return this.renderPeople();
    } else if (currentTopic === "planets") {
      return this.renderPlanets();
    } else if (currentTopic === "vehicles") {
      return this.renderVehicles();
    } else {
      alert("ALERT: invalid query");
    }
  };

  renderPeople = () => {
    const { people, currentTopic } = this.props;
    return people.map(person => {
      return (
        <Card
          name={person.name}
          homeworld={person.homeworld}
          population={person.population}
          species={person.species}
          key={Number(Math.random())}
          id={`person ${person.name}`}
          addToFavorites={this.props.addToFavorites}
          topic={currentTopic}
        />
      );
    });
  };

  renderPlanets = () => {
    const { planets, currentTopic } = this.props;
    return planets.map(planet => {
      return (
        <Card
          name={planet.name}
          climate={planet.climate}
          population={planet.population}
          residents={planet.residents}
          terrain={planet.terrain}
          key={Number(Math.random())}
          id={`planet ${planet.name}`}
          addToFavorites={this.props.addToFavorites}
          topic={currentTopic}
        />
      );
    });
  };

  renderVehicles = () => {
    const { vehicles, currentTopic } = this.props;
    return vehicles.map(vehicle => {
      return (
        <Card
          name={vehicle.name}
          model={vehicle.model}
          vClass={vehicle.class}
          passengers={vehicle.passengers}
          key={Number(Math.random())}
          id={`vehicle ${vehicle.name}`}
          addToFavorites={this.props.addToFavorites}
          topic={currentTopic}
        />
      );
    });
  };

  render() {
    const { currentTopic } = this.props;
    return (
      <article className="cards">
        <ul>{currentTopic ? this.renderCards() : null}</ul>
      </article>
    );
  }
}

export default CardContainer;
