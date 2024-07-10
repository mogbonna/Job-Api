const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://moseschukwudio:NJ0ax5j6pOQPupMj@cluster0.lpjlsfb.mongodb.net/jobs?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Database connected with DB");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDatabase;
