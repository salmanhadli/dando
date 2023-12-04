import mongoose from "mongoose";

const connectDb = async => mongoose.connect("mongodb://localhost:27017/demo");

export default connectDb;
