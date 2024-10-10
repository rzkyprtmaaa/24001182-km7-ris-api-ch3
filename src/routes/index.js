const express = require("express");
const studentsRouter = require("./students");
const carRouter = require("./cars");

const router = express.Router();

router.use("/students", studentsRouter);
router.use("/cars", carRouter);

module.exports = router;
