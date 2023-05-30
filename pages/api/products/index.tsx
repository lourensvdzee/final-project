// pages/api/products/addProduct.tsx

// pages/api/products/addProduct.tsx

import { NextApiRequest, NextApiResponse } from "next";
import { DbProduct } from "../../../db/models/DbProduct";
import dbConnect from "../../../db/connect";

const addProductHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid request method." });
    return;
  }

  const { title, ean, images, lowest_recorded_price } = req.body;

  try {
    await dbConnect();
    const product = new DbProduct({
      title,
      ean,
      images,
      lowest_recorded_price,
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
