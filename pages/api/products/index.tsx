// pages/api/products/index.tsx

import { NextApiRequest, NextApiResponse } from "next";
import { DbProduct, Durability } from "../../../db/models/DbProduct";
import dbConnect from "../../../db/connect";

const addProductHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid request method." });
    return;
  }

  const {
    title,
    ean,
    images,
    lowest_recorded_price,
    durabilityStart,
    durabilityEnd,
  } = req.body;

  try {
    await dbConnect();

    const durability = new Durability({
      start: durabilityStart,
      end: durabilityEnd,
    });

    const savedDurability = await durability.save();

    const product = new DbProduct({
      title,
      ean,
      images,
      lowest_recorded_price,
      durability: [savedDurability._id],
    });

    console.log("Product:", product);

    const savedProduct = await product.save();

    console.log("Product added to the database:", savedProduct);

    res.status(201).json({ success: true, product: savedProduct });
  } catch (error) {
    console.error("Error adding product to the database:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default addProductHandler;
