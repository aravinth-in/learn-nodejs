const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aravinth_in:<password>@cluster0.j5liqng.mongodb.net/bookstore-api"
    );
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Database connection is failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
