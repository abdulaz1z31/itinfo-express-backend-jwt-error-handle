import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, 
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },     
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Article = mongoose.model("Article", articleSchema);
