import React from "react";
import "./_Card.scss";

const Card = props => {
  const listVariant = function() {
    const {
      homeworld,
      species,
      population,
      climate,
      residents,
      terrain,
      model,
      vClass,
      passengers
    } = props;
    if (props.topic === "people") {
      return (
        <React.Fragment>
          <li>SPECIES: {species}</li>
          <li>HOMEWORLD:{homeworld}</li>
          <li>POPULATION:{population}</li>
        </React.Fragment>
      );
    } else if (props.topic === "planets") {
      return (
        <React.Fragment>
          <li>CLIMATE: {climate}</li>
          <li>TERRAIN: {terrain}</li>
          <li>POPULATION: {population}</li>
          <li>RESIDENTS</li>
        </React.Fragment>
      );
    } else if (props.topic === "vehicles") {
      return (
        <React.Fragment>
          <li>MODEL: {model}</li>
          <li>CLASS: {vClass}</li>
          <li>PASSENGERS: {passengers}</li>
        </React.Fragment>
      );
    } else {
      return <li>ERROR</li>;
    }
  };

  return (
    <li className="output-card" onClick={() => props.addToFavorites(props.id)}>
      <div className="card-backdrop">
        <p>Favorite</p>
        <h1>{props.name}</h1>
        <ul>{listVariant()}</ul>
      </div>
    </li>
  );
};

export default Card;
