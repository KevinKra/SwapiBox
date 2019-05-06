import React from "react";
import "./Button.scss";

class Button extends React.Component {
  fetchData = () => {
    fetch(`https://swapi.co/api/${this.props.label.toLowerCase()}`)
      .then(answer => answer.json())
      .then(unfilteredData => this.conditionalFilter(unfilteredData));
  };

  conditionalFilter = data => {
    const { label } = this.props;
    if (label.toLowerCase() === "people") {
      return this.filterDataPerson(data);
    } else if (label.toLowerCase() === "planets") {
      return this.filterDataPlanet(data);
    } else if (label.toLowerCase() === "vehicles") {
      return this.filterDataVehicle(data);
    } else {
      console.log("Invalid label");
    }
  };

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
    const promises = peopleArray.map(person =>
      fetch(person.species[0])
        .then(response => response.json())
        .then(data => ({
          ...person,
          species: data.name
        }))
    );
    return Promise.all(promises).then(response =>
      this.props.updateState("people", response)
    );
  };

  filterDataPlanet = data => {
    const output = data.results.reduce((accum, planet) => {
      const result = {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: planet.residents
      };
      accum.push(result);
      return accum;
    }, []);
    return this.fetchResidents(output);
  };

  fetchResidents = planets => {
    console.log("input planets", planets);
    planets.forEach(planet => {
      if (planet.residents) {
        const a = planet.residents.map(resident => {
          return fetch(resident)
            .then(response => response.json())
            .then(parsed => ({
              residents: parsed.name
            }));
        });
        Promise.all(a)
          .then(response => response.map(element => element.residents))
          .then(result => (planet.residents = result))
          .then(this.props.updateState("planets", [...planets, planet]));
      }
    });
  };

  filterDataVehicle = data => {
    const output = data.results.reduce((accum, vehicle) => {
      const result = {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      };
      accum.push(result);
      return accum;
    }, []);
    this.props.updateState("vehicles", output);
  };

  render() {
    return (
      <button className="btn-1" onClick={this.fetchData}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
