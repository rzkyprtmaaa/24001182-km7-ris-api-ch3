const carService = require("../services/cars");
const { successResponse } = require("../utils/response");

exports.getCars = (req, res, next) => {
  // Call the usecase or service
  const data = carService.getCars(req.query?.manufacture);

  successResponse(res, data);
};

exports.getCarById = (req, res, next) => {
  const { id } = req.params;
  const data = carService.getCarById(id);
  successResponse(res, data);
};

exports.createCar = (req, res, next) => {
  const data = carService.createCar(req.body);
  successResponse(res, data);
};

exports.deleteCarById = (req, res, next) => {
  // Get the id from params
  const { id } = req.params;
  const data = carService.deleteCarById(id);
  successResponse(res, data);
};

exports.updateCar = (req, res, next) => {
  const { id } = req.params;
  const data = carService.updateCar(id, req.body);
  successResponse(res, data);
};
