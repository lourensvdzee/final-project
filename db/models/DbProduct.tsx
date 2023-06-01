// db/models/DbProduct.tsx

import mongoose, { Document } from "mongoose";

export interface Durability {
  _id: string;
  start: Date;
  end: Date;
  months: number;
}

export interface DbProduct extends Document {
  title: string;
  ean: string;
  images: string[];
  lowest_recorded_price: number;
  durability: Durability[];
  brand: string;
  model: string;
  description: string;
  color: string;
}

const { Schema } = mongoose;

const durabilitySchema = new Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  months: { type: Number, required: true },
});

const dbProductSchema = new Schema({
  title: { type: String, required: true },
  ean: { type: String, required: true, unique: true },
  images: { type: [String], required: true },
  lowest_recorded_price: { type: Number, required: true },
  durability: {
    type: [Schema.Types.ObjectId],
    ref: "Durability",
    required: true,
  },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String },
  color: { type: String },
});

const Durability =
  mongoose.models.Durability ||
  mongoose.model<Durability>("Durability", durabilitySchema);

const DbProduct =
  mongoose.models.DbProduct ||
  mongoose.model<DbProduct>("DbProduct", dbProductSchema);

export { Durability, DbProduct };
