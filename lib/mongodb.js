import mongoose from "mongoose";

async function connectMongoDb() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
    console.log("The connection to the MongoDB is successful.");
  } catch (e) {
    console.error(`The connection to the MongoDB is failed: ${e}`);
  }
}

export default connectMongoDb;
