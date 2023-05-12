import React from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../db/connect";
import DbProduct, {
  DbProduct as ProductInterface,
} from "../db/models/DbProduct";
import ProductList from "../components/ProductList";

interface Props {
  products: ProductInterface[];
}

export default function Home({ products }: Props) {
  return <ProductList products={products} />;
}

/*getServerSideProps is a Next.js API that runs only on the server-side before the component is loaded and renders. 
It is used to pre-render the page with the fetched data as initial props. See this as Next.js magic: This allows for 
faster rendering as the page is pre-rendered with the fetched data.*/
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // Connect to the MongoDB database using Mongoose
  await dbConnect();

  const products = await DbProduct.find({});

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
};
