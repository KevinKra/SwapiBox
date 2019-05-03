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
      homeworld: person.homeworld,
      species: person.species
    };
    accum.push(result);
    return accum;
  }, []);
  return fetchData(output);
};

const fetchData = peopleArray => {
  const promises = peopleArray.map(person => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({
        ...person,
        homeworld: data.name,
        population: data.population
      }));
  });
  Promise.all(promises)
    .then(result => fetchSpecies(result))
    .then(output => console.log("output", output));
};

const fetchSpecies = peopleArray => {
  console.log("input", peopleArray);
  console.log("species URL", peopleArray[0].species[0]);
  const promises = peopleArray.map(person =>
    fetch(person.species[0])
      .then(response => response.json())
      // .then(shape => console.log(shape))
      .then(data => ({
        ...person,
        species: data.name
      }))
  );
  return Promise.all(promises);
};

///////
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
