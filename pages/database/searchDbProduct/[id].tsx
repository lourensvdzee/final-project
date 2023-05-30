/* pages/database/searchDbProduct/[id].tsx
\ */

//Not sure if this page is actually used

import dbConnect from "../../../db/connect";
import { DbProduct } from "../../../db/models/DbProduct";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await DbProduct.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
