import express from "express";
import API_route from "./routes/v1/index.js";
import {
  convert_error,
  handle_global_error,
} from "./middleware/error.handler.js";
import CustomError from "./utils/custom.error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use("/api/v1", API_route);

// not found API
app.all("*", (req, res, next) => {
  const message = `${req.originalUrl} not found`;
  next(new CustomError(404, message));
});

//error handling middleware
app.use(convert_error);
app.use(handle_global_error);

export default app;
