/* components/ProductList/ProductList.tsx
\ */

import React from "react";
import { DbProduct } from "../../db/models/DbProduct";
import {
  CardList,
  Card,
  ImageWrapper,
  Image,
  ProductInfo,
  ProductName,
  EAN,
  Description,
  MoreLink,
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
            <ImageWrapper>
              <Image src={product.images[0]} alt="Product Image" />
            </ImageWrapper>
            <ProductInfo>
              <ProductName>
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </ProductName>
              <EAN>EAN: {product.ean}</EAN>
              <Description>
                {product.description.length > 100
                  ? product.description.slice(0, 200) + "..."
                  : product.description}{" "}
                (<MoreLink>more</MoreLink>)
              </Description>
              <Durability>Expected durability:</Durability>
            </ProductInfo>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
