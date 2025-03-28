import app from "./app.js";
import connectDb from "./src/database/db.connection.js";

const DB_CONNECTION_URL = "mongodb://127.0.0.1:27017/blog";

app.listen(3000, async () => {
  const conn = await connectDb(DB_CONNECTION_URL);
  console.log("Server is running on port 3000");
  console.log("URL=>:http://localhost:3000");
});
