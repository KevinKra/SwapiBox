export const clearRandomMovie = data => {
  const movieInfo = {
    summary: data.opening_crawl,
    title: data.title,
    releaseDate: data.release_date
  };
  return movieInfo;
};

export const filterDataPerson = data => {
  const output = data.results.reduce((accum, person) => {
    const result = {
      name: person.name,
      homeworld: "fetch needed 2",
      homeworld_pop: "fetch needed 1",
      species: "fetch needed 3"
    };
    accum.push(result);
    return accum;
  }, []);
  return output;
};

export const filterDataPlanet = data => {
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
  return output;
};

export const filterDataVehicle = data => {
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
  return output;
};

// Name
// Model
// Class
// Number of Passengers
