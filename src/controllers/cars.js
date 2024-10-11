const carService = require("../services/cars");
const { successResponse } = require("../utils/response");

exports.getCars = (req, res, next) => {
  // Extract manufacture and capacity from the query
  const { manufacture, capacity } = req.query;

  // Convert capacity to a number
  const capacityNumber = capacity ? parseInt(capacity) : null;

  // Call the service to get filtered cars based on manufacture and capacity
  const data = carService.getCars(manufacture, capacityNumber);

  successResponse(res, data);
};

exports.getCarById = (req, res, next) => {
  const { id } = req.params;
  const data = carService.getCarById(id);
  successResponse(res, data);
};

exports.createCar = async (req, res, next) => {
  const carData = {
    plate: req.body.plate,
    manufacture: req.body.manufacture,
    model: req.body.model,
    rentPerDay: parseFloat(req.body.rentPerDay), // convert string to number
    capacity: parseInt(req.body.capacity), // convert string to integer
    description: req.body.description,
    availableAt: req.body.availableAt,
    transmission: req.body.transmission,
    available: req.body.available === "true", // convert string to boolean
    type: req.body.type,
    year: parseInt(req.body.year), // convert string to integer
    options: JSON.parse(req.body.options), // parse string to array
    specs: JSON.parse(req.body.specs), // parse string to array
  };

  const data = await carService.createCar(carData, req.files);
  successResponse(res, data);
};

exports.deleteCarById = (req, res, next) => {
  // Get the id from params
  const { id } = req.params;
  const data = carService.deleteCarById(id);
  successResponse(res, data);
};

exports.updateCar = async (req, res, next) => {
  const { id } = req.params;

  const carData = {
    plate: req.body.plate,
    manufacture: req.body.manufacture,
    model: req.body.model,
    rentPerDay: parseFloat(req.body.rentPerDay), // convert string to number
    capacity: parseInt(req.body.capacity), // convert string to integer
    description: req.body.description,
    availableAt: req.body.availableAt,
    transmission: req.body.transmission,
    available: req.body.available === "true", // convert string to boolean
    type: req.body.type,
    year: parseInt(req.body.year), // convert string to integer
    options: JSON.parse(req.body.options), // parse string to array
    specs: JSON.parse(req.body.specs), // parse string to array
  };

  const data = await carService.updateCar(id, carData, req.files);
  successResponse(res, data);
};
