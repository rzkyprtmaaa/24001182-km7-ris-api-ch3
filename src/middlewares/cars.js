const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetCars = (req, res, next) => {
  // Validate the query
  const validateQuery = z.object({
    manufacture: z.string().optional(),
  });

  const resultValidateQuery = validateQuery.safeParse(req.params);
  if (!resultValidateQuery.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateQuery.error.errors.map);
  }
  next();
};

exports.validateGetCarById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);

  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateCreateCar = (req, res, next) => {
  // Validation body schema
  const validateBody = z.object({
    plate: z.string(),
    manufacture: z.string(),
    model: z.string(),
    image: z.string(),
    rentPerDay: z.number(),
    capacity: z.number(),
    description: z.string(),
    availableAt: z.string(),
    transmission: z.string(),
    available: z.boolean(),
    type: z.string(),
    year: z.number(),
    options: z.array(z.string()),
    specs: z.array(z.string()),
  });

  // validate
  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateDeleteCarById = (req, res, next) => {
  // Make a validation schema
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdateCar = (req, res, next) => {
  // zod validation
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  // Validation body schema
  const validateBody = z.object({
    plate: z.string(),
    manufacture: z.string(),
    model: z.string(),
    image: z.string(),
    rentPerDay: z.number(),
    capacity: z.number(),
    description: z.string(),
    availableAt: z.string(),
    transmission: z.string(),
    available: z.boolean(),
    type: z.string(),
    year: z.number(),
    options: z.array(z.string()),
    specs: z.array(z.string()),
  });

  // Validate
  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};