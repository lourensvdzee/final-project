/* pages/searchDatabase/searchDatabase.tsx
\ */

import React from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../db/connect";
import { DbProduct } from "../db/models/DbProduct";
import ProductList from "../components/ProductList/ProductList";

interface Props {
  searchQuery: string;
  products: DbProduct[];
}

const SearchPage = ({ searchQuery, products }: Props) => {
  return (
    <div className="result-container">
      <h2 className="result-h2">Search Results for: {searchQuery}</h2>
      <ProductList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const searchQuery = context.query.query as string;

  // Connect to the MongoDB database using Mongoose
  await dbConnect();

  // Perform the search query on the database
  const products = await DbProduct.find({
    $or: [
      { ean: { $regex: searchQuery, $options: "i" } },
      { brand: { $regex: searchQuery, $options: "i" } },
      { title: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
    ],
  }).populate("durability");

  return {
    props: {
      searchQuery,
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default SearchPage;
