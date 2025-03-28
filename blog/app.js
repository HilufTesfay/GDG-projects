import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use("/api/v1", (req, res) => {
  res.send("API v1 is working");
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use("*", (req, res, next) => {
  res.status(404).send(`${req.originalUrl} not found`);
});

export default app;
