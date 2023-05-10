import React from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../db/connect";
import Product from "../db/models/Product";
import { Document } from "mongoose";

interface IProduct extends Document {
  title: string;
  ean: string;
  _id: string;
}

interface Props {
  products: IProduct[];
}

export default function Home({ products }: Props) {
  //   console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.ean} - {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await dbConnect();

  const products = await Product.find({});

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
};
