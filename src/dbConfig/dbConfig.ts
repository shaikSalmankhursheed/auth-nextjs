import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Sucessfully");
    });
    connection.on("error", (error) => {
      console.log(
        "MongoDB Connection Error. Please make sure MongoDB is running",
        error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
