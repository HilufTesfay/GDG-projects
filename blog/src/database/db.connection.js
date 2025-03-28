import mongoose from "mongoose";

//This function is used to connect to the database using mongoose
const connectDb = async (dbConnection_url) => {
  try {
    const conn = await mongoose.connect(dbConnection_url);
    console.log("Database connected successfully");
    return conn;
  } catch (error) {
    console.log(`Error in database connection: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
