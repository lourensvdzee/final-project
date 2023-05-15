import mongoose, { Document } from "mongoose";

export interface DbProduct extends Document {
  title: string;
  ean: string;
  images: string[];
  description: string;
}

const { Schema } = mongoose;

const dbProductSchema = new Schema({
  title: { type: String, required: true },
  ean: { type: String, required: true, unique: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
});

const DbProduct =
  mongoose.models.DbProduct || mongoose.model("DbProduct", dbProductSchema);

export default DbProduct;
