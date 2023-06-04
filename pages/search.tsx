// pages/search.tsx

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
import dummyData from "../lib/dummydata.json"; // import dummy data

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
      {isProductFound && <ProductList products={dbProducts} />}
      {!isProductFound && apiProducts.length > 0 && (
        <>
          <div className="result-text">
            <p className="result-text-title">
              Here you find products we found outside of our database. Did you
              mean any of these?
            </p>
            <ul className="result-text-list">
              <li>1. Choose the product you were looking for ☝</li>
              <li>2. Share your durability experience ⏲</li>
              <li>3. Contribute to our database by adding it 💾</li>
              <li>
                4. Join the community in making environmentally-friendly
                choices! 🌳
              </li>
            </ul>
          </div>
          <ProductListApi products={apiProducts} />
        </>
      )}
      {!isProductFound && apiProducts.length === 0 && (
        <>
          <div className="result-text">
            <p className="result-text-title">
              THESE ARE DUMMY RESULTS. Did you mean any of these?
            </p>
            <ul className="result-text-list">
              <li>1. Choose the product you were looking for ☝</li>
              <li>2. Share your durability experience ⏲</li>
              <li>3. Contribute to our database by adding it 💾</li>
              <li>
                4. Join the community in making environmentally-friendly
                choices! 🌳
              </li>
            </ul>
          </div>
          <ProductListApi products={dummyData.items} />
        </>
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
