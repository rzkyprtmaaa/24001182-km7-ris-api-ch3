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

router.get("/", validateGetCars, getCars);
router.get("/:id", validateGetCarById, getCarById);
router.post("/", validateCreateCar, createCar);
router.delete("/:id", validateDeleteCarById, deleteCarById);
router.put("/:id", validateUpdateCar, updateCar);

module.exports = router;
