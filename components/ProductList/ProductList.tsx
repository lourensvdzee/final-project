/* components/ProductList/ProductList.tsx
\ */

import React from "react";
import { DbProduct } from "../../db/models/DbProduct";
import {
  CardList,
  Card,
  ImageWrapper,
  Image,
  ProductInfoWrapper,
  ProductInfo,
  ProductName,
  EAN,
  Price,
  Durability,
} from "./ProductListStyles";

interface Props {
  products: DbProduct[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CardList>
        {products.map((product) => (
          <Card key={product._id}>
            <ProductName>
              {product.title.length > 24
                ? product.title.slice(0, 24) + "..."
                : product.title}
            </ProductName>
            <br />
            <ProductInfoWrapper>
              <ImageWrapper>
                <Image src={product.images[0]} alt="Product Image" />
              </ImageWrapper>
              <ProductInfo>
                <EAN>EAN: {product.ean}</EAN>
                <Durability>Durability:</Durability>
                <Price>
                  Price:
                  <br />${product.lowest_recorded_price}
                </Price>
              </ProductInfo>
            </ProductInfoWrapper>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
