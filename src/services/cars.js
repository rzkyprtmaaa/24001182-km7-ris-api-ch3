const carRepository = require("../repositories/cars");
const { imageUpload } = require("../utils/image-kit");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getCars = (manufacture, capacityNumber) => {
  return carRepository.getCars(manufacture, capacityNumber);
};

exports.getCarById = (id) => {
  const car = carRepository.getCarById(id);
  if (!car) {
    throw new NotFoundError("Car is Not Found!");
  }

  return car;
};

exports.createCar = async (data, file) => {
  // Upload file to image kit
  if (file?.image) {
    data.image = await imageUpload(file.image);
  }

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

exports.updateCar = async (id, data, file) => {
  // find student is exist or not (validate the data)
  const existingCar = carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError("Car is Not Found!");
  }

  // replicated existing data with new data
  data = {
    ...existingCar, // existing Student
    ...data,
  };

  // Upload file to image kit
  if (file?.image) {
    data.image = await imageUpload(file.image);
  }

  // if exist, we will delete the student data
  const updateCar = carRepository.updateCar(id, data);
  if (!updateCar) {
    throw new InternalServerError(["Failed to update car!"]);
  }

  return updateCar;
};
