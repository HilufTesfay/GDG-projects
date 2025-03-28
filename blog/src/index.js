import app from "./app.js";
import connectDb from "./database/db.connection.js";

const DB_CONNECTION_URL = "mongodb://127.0.0.1:27017/blog";

const server = app.listen(3000, async () => {
  const conn = await connectDb(DB_CONNECTION_URL);
  console.log("Server is running on port 3000");
  console.log("URL=>:http://localhost:3000");
});

// This function handles uncaught errors and unhandled promise rejections
const handleUncaughtError = async (error) => {
  console.error(error.stack);
  console.log("Server is shutting down due to uncaught error");
  await handleExit(server);
};

//This function closes server grecfully
const handleExit = async (server) => {
  if (server) {
    server.close(() => {
      console.log("Server is shutting down");
      process.exit(0);
    });
  } else {
    process.exit(1);
  }
};

process.on("uncaughtException", handleUncaughtError);
process.on("onhandledRejection", handleUncaughtError);

process.on("SIGTERM", (sig) => {
  console.error(sig);
  if (server) {
    server.close();
  }
});
