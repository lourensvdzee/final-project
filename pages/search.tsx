/* pages/search.tsx
\ */

/* import React from "react";
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
 */

import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import dbConnect from "../db/connect";
import { DbProduct } from "../db/models/DbProduct";
import { fetchApiProducts, ApiProduct } from "../db/models/ApiProduct";
import ProductList from "../components/ProductList/ProductList";
import ProductListApi from "../components/ProductListApi/ProductListApi";

interface Props {
  searchQuery: string;
  dbProducts: DbProduct[];
  apiProducts: ApiProduct[];
}

const SearchPage = ({ searchQuery, dbProducts, apiProducts }: Props) => {
  const isProductFound = dbProducts.length > 0;

  return (
    <div className="result-container">
      <h2 className="result-h2">Search Results for: {searchQuery}</h2>
      {isProductFound && (
        <>
          <h3 className="result-h3">MongoDB Products</h3>
          <ProductList products={dbProducts} />
        </>
      )}
      {!isProductFound && apiProducts.length > 0 && (
        <>
          <p className="result-text">
            Product not found in Database. Continuing search outside of the
            database.
          </p>
          <p className="result-text">Loading...</p>
          <ProductListApi products={apiProducts} />
        </>
      )}
      {!isProductFound && apiProducts.length === 0 && (
        <p className="result-text">
          Product not found. Please try another search query.
        </p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const searchQuery = context.query.query as string;
  await dbConnect();

  const dbProducts = await DbProduct.find({
    $or: [
      { ean: { $regex: searchQuery, $options: "i" } },
      { brand: { $regex: searchQuery, $options: "i" } },
      { title: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
    ],
  }).populate("durability");

  if (dbProducts.length > 0) {
    return {
      props: {
        searchQuery,
        dbProducts: JSON.parse(JSON.stringify(dbProducts)),
        apiProducts: [],
      },
    };
  }

  const apiProducts: ApiProduct[] = await fetchApiProducts(searchQuery);

  return {
    props: {
      searchQuery,
      dbProducts: [],
      apiProducts,
    },
  };
};

export default SearchPage;
