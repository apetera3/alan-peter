import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your_database_name", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDatabase;
