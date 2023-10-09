const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alan_peter7:qyMru3IjbVJMi89o@cluster0.yzjqt5l.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDatabase;
