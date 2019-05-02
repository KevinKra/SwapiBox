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
    this.state = {
      topic: {}
    };
  }

  // componentDidMount() {
  //   this.fetchAllData();
  // }

  // fetchData = () => {
  //   fetch(`https://swapi.co/api/${this.props.label.toLowerCase()}`)
  //     .then(answer => answer.json())
  //     .then(unfilteredData => this.conditionalFilter(unfilteredData))
  //     .then(filteredData => this.props.updateTopic(filteredData));
  // };

  /////////////
  // fetchAllData = () => {
  //   const peoplePromise = fetch(`https://swapi.co/api/people`);
  //   const planetsPromise = fetch(`https://swapi.co/api/planets`);
  //   const vehiclesPromise = fetch(`https://swapi.co/api/vehicles`);
  //   Promise.all([peoplePromise, planetsPromise, vehiclesPromise])
  //     // .then( responses.map( response => {response.json()} ).then( parsed => console.log(parsed));
  //     .then(responses => console.log(responses));

  //   // .then(answer => answer.json())
  //   // .then(unfilteredData => this.conditionalFilter(unfilteredData))
  //   // .then(filteredData => this.props.updateTopic(filteredData));
  // };

  conditionalFilter = data => {
    if (this.props.label.toLowerCase() === "people") {
      return filterDataPerson(data);
    } else if (this.props.label.toLowerCase() === "planets") {
      return filterDataPlanet(data);
    } else if (this.props.label.toLowerCase() === "vehicles") {
      return filterDataVehicle(data);
    } else {
      console.log("Invalid label");
    }
  };

  filterCombiner = data => {
    // const { planetData, personData, vehicleData }
    const combinedData = data.reduce((accum, curr) => {
      const planetData = filterDataPlanet();
      const personData = filterDataPerson();
      const vehicleData = filterDataVehicle();
      accum.push(planetData, personData, vehicleData);
      return accum;
    }, []);
    return combinedData;
  };

  // filterCombiner = data => {
  //   const combinedData = data.reduce((accum, curr) => {
  //     const planetData = filterDataPlanet();
  //     const personData = filterDataPerson();
  //     const vehicleData = filterDataVehicle();
  //     accum.push(planetData, personData, vehicleData);
  //     return accum;
  //   }, []);
  //   return combinedData;
  // };

  render() {
    console.log(this.props.label.toLowerCase());
    return (
      <button className="btn-1" onClick={this.fetchData}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
