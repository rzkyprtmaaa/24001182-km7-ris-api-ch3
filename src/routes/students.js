const express = require("express");
const {
  validateGetStudents,
  validateGetStudentById,
  validateCreateStudent,
  validateDeleteStudentById,
  validateUpdateStudent,
} = require("../middlewares/students");
const {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudentById,
  updateStudent,
} = require("../controllers/students");

const router = express.Router();

router
  .route("/")
  .get(validateGetStudents, getStudents)
  .post(validateCreateStudent, createStudent);

router
  .route("/:id")
  .get(validateGetStudentById, getStudentById)
  .put(validateUpdateStudent, updateStudent)
  .delete(validateDeleteStudentById, deleteStudentById);

module.exports = router;
