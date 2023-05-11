import mongoose, { Document } from "mongoose";

// Define the Product interface
export interface Product extends Document {
  title: string;
  ean: string;
}

const { Schema } = mongoose;

// Define the product schema using Mongoose
const productSchema = new Schema({
  title: { type: String, required: true },
  ean: { type: String, required: true, unique: true },
});

// Define the Product model using the product schema
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Export the Product model
export default Product;
