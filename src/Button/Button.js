import React from "react";
import "./Button.scss";
import {
  filterDataPerson,
  filterDataPlanet,
  filterDataVehicle
} from "../utilities";

class Button extends React.Component {
  constructor() {
    super();
  }

  fetchData = () => {
    fetch(`https://swapi.co/api/${this.props.label.toLowerCase()}`)
      .then(answer => answer.json())
      .then(unfilteredData => this.conditionalFilter(unfilteredData));
    // .then(filteredData => this.props.updateTopic(filteredData));
  };

  conditionalFilter = data => {
    if (this.props.label.toLowerCase() === "people") {
      return this.filterDataPerson(data);
    } else if (this.props.label.toLowerCase() === "planets") {
      return filterDataPlanet(data);
    } else if (this.props.label.toLowerCase() === "vehicles") {
      return filterDataVehicle(data);
    } else {
      console.log("Invalid label");
    }
  };

  ///////
  filterDataPerson = data => {
    const output = data.results.reduce((accum, person) => {
      const result = {
        name: person.name,
        homeworld: person.homeworld,
        species: person.species
      };
      accum.push(result);
      return accum;
    }, []);
    return this.fetchData2(output);
  };

  fetchData2 = peopleArray => {
    const promises = peopleArray.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          ...person,
          homeworld: data.name,
          population: data.population
        }));
    });
    Promise.all(promises).then(result => this.fetchSpecies(result));
  };

  fetchSpecies = peopleArray => {
    console.log("input", peopleArray);
    // console.log("species URL", peopleArray[0].species[0]);
    const promises = peopleArray.map(person =>
      fetch(person.species[0])
        .then(response => response.json())
        // .then(shape => console.log(shape))
        .then(data => ({
          ...person,
          species: data.name
        }))
    );
    return Promise.all(promises).then(response =>
      this.props.updatePeople(response)
    );
  };
  /////

  render() {
    return (
      <button className="btn-1" onClick={this.fetchData}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
