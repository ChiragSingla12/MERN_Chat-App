const mongoose = require("mongoose");

// Set strictQuery to false to prepare for the change
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
