import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("🚨 MONGODB_URI is missing from environment variables!");
}

let connection = null;

export const connectToDatabase = async () => {
  if (connection) return connection;

  try {
    connection = await mongoose.connect(MONGODB_URI, {
      dbName: "vn-event",
      bufferCommands: false,
    });

    console.log("✅ MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
