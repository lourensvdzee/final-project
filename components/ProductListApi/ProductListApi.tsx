/* components/ProductListApi/ProductListApi.tsx
\ */

import React from "react";
import { ApiProduct } from "../../db/models/ApiProduct";
import {
  CardListApi,
  CardApi,
  ProductName,
  ProductInfo,
  ImageWrapper,
  Image,
  EanWrapper,
  EAN,
  ProductInfoRight,
  PriceTitle,
  PriceValue,
} from "./ProductListApiStyles";

interface Props {
  products: ApiProduct[];
}

const ProductListApi: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CardListApi>
        {products.map((product) => (
          <CardApi key={product.ean}>
            <ProductName>{product.title}</ProductName>
            <ProductInfo>
              <ImageWrapper>
                <Image src={product.images[0]} alt="Product Image" />
              </ImageWrapper>
              <EanWrapper>
                <EAN>EAN: {product.ean}</EAN>
              </EanWrapper>
              <ProductInfoRight>
                <PriceTitle>Price:</PriceTitle>
                <PriceValue>${product.lowest_recorded_price}</PriceValue>
              </ProductInfoRight>
            </ProductInfo>
          </CardApi>
        ))}
      </CardListApi>
    </div>
  );
};

export default ProductListApi;
