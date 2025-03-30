import express from "express";
import API_route from "./routes/index.js";
import {
  convert_error,
  handle_global_error,
} from "./middleware/error.handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use("/api/v1", API_route);

//error handling middleware
app.use(convert_error);
app.use(handle_global_error);

app.use("*", (req, res, next) => {
  res.status(404).send(`${req.originalUrl} not found`);
});

export default app;
