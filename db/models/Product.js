import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true },
    ean: { type: String, required: true, unique: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

