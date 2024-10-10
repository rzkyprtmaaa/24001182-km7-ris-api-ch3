const express = require("express");
const {
  validateGetCars,
  validateGetCarById,
  validateCreateCar,
  validateDeleteCarById,
  validateUpdateCar,
} = require("../middlewares/cars");
const {
  getCars,
  getCarById,
  createCar,
  deleteCarById,
  updateCar,
} = require("../controllers/cars");

const router = express.Router();

router
  .route("/")
  .get(validateGetCars, getCars)
  .post(validateCreateCar, createCar);

router
  .route("/:id")
  .get(validateGetCarById, getCarById)
  .put(validateUpdateCar, updateCar)
  .delete(validateDeleteCarById, deleteCarById);

module.exports = router;
