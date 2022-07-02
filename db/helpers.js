import mongoose from "mongoose";
import { dbURL } from "../config/environment.js";

export async function connectToDb() {
  return mongoose.connect(dbURL)
}

export async function disconnectDb() {
  return mongoose.disconnect()
}