import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema);
