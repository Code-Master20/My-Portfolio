import "./env.js";
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  const URI = process.env.MONGODB_URI;

  if (!URI) {
    throw new Error("MONGO_URL is not defined");
  }

  try {
    const db = await mongoose.connect(URI);
    isConnected = db.connections[0].readyState;
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
};
