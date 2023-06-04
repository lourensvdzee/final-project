// pages/api/products/[id]/durability.tsx

import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../db/connect";
import { DbProduct, Durability } from "../../../../db/models/DbProduct";

const addDurabilityHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log("Request Body:", req.body);
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid request method." });
    return;
  }

  const { start, end } = req.body;
  const id = req.query.id;

  try {
    await dbConnect();

    const startDate = new Date(start);
    const endDate = new Date(end);
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth();

    const durability = new Durability({
      start: startDate,
      end: endDate,
      months,
    });

    console.log("Durability:", durability);

    const savedDurability = await durability.save();

    const product = await DbProduct.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found." });
      return;
    }

    product.durability.push(savedDurability._id);

    console.log("Product:", product);

    const savedProduct = await product.save();

    console.log("Product updated in the database:", savedProduct);

    res.status(200).json({ success: true, product: savedProduct });
  } catch (error) {
    console.error("Error adding durability to the database:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default addDurabilityHandler;
