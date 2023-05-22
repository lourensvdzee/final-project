/* pages/database/searchDbProduct/durability/[id].tsx
\ */
/* 
import { NextApiRequest, NextApiResponse } from "next";
import DbProduct, { Durability } from "../../../../db/models/DbProduct";
import dbConnect from "../../../../db/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    await dbConnect();

    const product = await DbProduct.findOne({ "durability._id": id });

    console.log("Fetched product:", product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let durabilityStart = "";

    if (Array.isArray(product.durability)) {
      const durability = product.durability.find(
        (item) => item?._id?.toString() === id
      ) as Durability | undefined;

      if (durability) {
        durabilityStart = durability.start;
      }
    }

    res.status(200).json({ start: durabilityStart });
  } catch (error) {
    console.error("Error fetching durability start:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
 */
