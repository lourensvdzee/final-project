import React from "react";
import { DbProduct } from "../db/models/DbProduct";

interface Props {
  products: DbProduct[];
}

/*React.FC is a type alias for React function components in TypeScript. It stands for "Function Component" 
and is a shorthand for defining a function component in TypeScript.*/
const ProductList: React.FC<Props> = ({ products }) => {
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
};

export default ProductList;
