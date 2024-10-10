const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cars = require("../../data/cars.json");

exports.getCars = (manufacture) => {
  const searchedCar = cars.filter((car) => {
    // Do filter logic here
    let result = true;
    if (manufacture) {
      const isFoundManufacture = car.manufacture
        .toLowerCase()
        .includes(manufacture.toLowerCase());
      result = result && isFoundManufacture;
    }
    return result;
  });
  return searchedCar;
};

exports.getCarById = (id) => {
  // find student by id
  const car = cars.find((car) => car.id == id);
  return car;
};

exports.createCar = (data) => {
  const newCar = {
    id: uuidv4(),
    ...data,
  };
  cars.push(newCar);

  fs.writeFileSync("./data/cars.json", JSON.stringify(cars, null, 2), "utf-8");

  return newCar;
};

exports.deleteCarById = (id) => {
  // Find index
  const carIndex = cars.findIndex((car) => car.id == id);

  if (carIndex <= 0) {
    // If no index found
    throw new NotFoundError("Car is Not Found!");
  }

  const deletedCar = cars.splice(carIndex, 1);

  // Update the json
  fs.writeFileSync("./data/cars.json", JSON.stringify(cars, null, 4), "utf-8");

  return deletedCar;
};

exports.updateCar = (id, data) => {
  // Find the existing student data
  const car = cars.find((car) => car.id === id);
  if (!car) {
    // Make a error class
    throw new NotFoundError("Car is Not Found!");
  }

  // Update the data
  Object.assign(car, data);

  // Update the json data
  fs.writeFileSync("./data/cars.json", JSON.stringify(cars, null, 4), "utf-8");

  return car;
};
