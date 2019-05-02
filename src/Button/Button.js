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

  fetchData = () => {
    fetch(`https://swapi.co/api/${this.props.label.toLowerCase()}`)
      .then(answer => answer.json())
      .then(unfilteredData => this.conditionalFilter(unfilteredData))
      .then(filteredData => this.props.updateTopic(filteredData));
  };

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

  render() {
    return (
      <button className="btn-1" onClick={this.fetchData}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
