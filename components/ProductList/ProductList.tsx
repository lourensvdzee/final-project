/* components/ProductList/ProductList.tsx
\ */

import React from "react";
import { DbProduct, Durability } from "../../db/models/DbProduct";
import {
  CardList,
  Card,
  ProductName,
  ProductInfo,
  ImageWrapper,
  Image,
  EanWrapper,
  EAN,
  ProductInfoRight,
  PriceTitle,
  PriceValue,
  DurabilityTitle,
  DurabilityValue,
} from "./ProductListStyles";

interface Props {
  products: DbProduct[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  function getDurability(durability: Durability[] | string[]): string {
    if (Array.isArray(durability)) {
      for (const item of durability) {
        if (typeof item === "object" && "start" in item) {
          console.log("Durability Start:", item.start);
          return item.start;
        }
      }
    } else {
      console.log("Durability:", durability);
    }

    return "";
  }

  return (
    <div>
      <CardList>
        {products.map((product) => (
          <Card key={product._id}>
            <ProductName>
              {product.title.length > 37
                ? product.title.slice(0, 37) + "..."
                : product.title}
            </ProductName>
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
                <DurabilityTitle>Durability:</DurabilityTitle>
                <DurabilityValue>
                  {getDurability(product.durability)}
                </DurabilityValue>
              </ProductInfoRight>
            </ProductInfo>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
