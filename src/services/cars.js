const carRepository = require("../repositories/cars");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getCars = (manufacture) => {
  return carRepository.getCars(manufacture);
};

exports.getCarById = (id) => {
  const car = carRepository.getCarById(id);
  if (!car) {
    throw new NotFoundError("Car is Not Found!");
  }

  return car;
};

exports.createCar = (data) => {
  return carRepository.createCar(data);
};

exports.deleteCarById = (id) => {
  // find car is exist or not (validate the data)
  const existingCar = carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError("Car is Not Found!");
  }

  // if exist, we will delete the car data
  const deletedCar = carRepository.deleteCarById(id);
  if (!deletedCar) {
    throw new InternalServerError(["Failed to delete car!"]);
  }

  return deletedCar;
};

exports.updateCar = (id, data) => {
  // find student is exist or not (validate the data)
  const existingCar = carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError("Car is Not Found!");
  }

  // if exist, we will delete the student data
  const updateCar = carRepository.updateCar(id, data);
  if (!updateCar) {
    throw new InternalServerError(["Failed to update car!"]);
  }

  return updateCar;
};
