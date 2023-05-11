import React from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../db/connect";
import Product, { Product as ProductInterface } from "../db/models/Product";

// Define the interface for the Home page props
interface Props {
  products: ProductInterface[];
}

export default function Home({ products }: Props) {
  // Render the list of products
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

// Define the server-side props for the Home page
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // Connect to the MongoDB database using Mongoose
  await dbConnect();

  // Fetch all products from the database using the Product model
  const products = await Product.find({});

  // Return the products as props for the Home page
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
};
