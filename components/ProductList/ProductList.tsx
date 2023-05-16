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
            <ProductInfoWrapper>
              <ProductInfo>
                <ProductName>
                  {product.title.length > 24
                    ? product.title.slice(0, 24) + "..."
                    : product.title}
                </ProductName>
                <EAN>EAN: {product.ean}</EAN>
                <Description>
                  {product.description.length > 120
                    ? product.description.slice(0, 120) + "..."
                    : product.description}{" "}
                  (<MoreLink>more</MoreLink>)
                </Description>
              </ProductInfo>
              <Durability>Expected durability:</Durability>
            </ProductInfoWrapper>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
