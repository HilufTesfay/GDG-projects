import CustomError from "../utils/custom.error.js";

//This middleware converts error to custom error
const convert_error = async (error, req, res, next) => {
  if (error instanceof CustomError) return next(error);
  else {
    return next(new CustomError(500, "Something went Wrong"));
  }
};

//This middleware handles errors globaly
const handle_global_error = async (error, req, res, next) => {
  res.status(error.statusCode).json(error.message);
};

export { convert_error, handle_global_error };
