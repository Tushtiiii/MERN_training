const mongoose = require('mongoose');

const getCon = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mappings")
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = getCon;