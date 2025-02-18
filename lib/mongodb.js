import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Use MONGODB_URI instead of MONGO

if (!MONGODB_URI) {
  throw new Error("Please define the MongoDB environment variable");
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  const opts = {
    bufferCommands: false,
  };
  await mongoose.connect(MONGODB_URI, opts);
  return mongoose;
}

export default connectToDatabase;
