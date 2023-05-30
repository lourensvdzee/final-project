// components/ProductList/ProductList.tsx

import React from "react";
import { DbProduct, Durability } from "../../db/models/DbProduct";
import {
  CardList,
  CardDb,
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
  function getAverageDurability(durability) {
    const count = durability.length;
    if (count > 0) {
      const totalMonths = durability.reduce(
        (total, item) => total + parseInt(item.months, 10),
        0
      );
      const averageMonths = totalMonths / count;
      const years = Math.floor(averageMonths / 12);
      const months = Math.round(averageMonths % 12);
      return `${years}.${months} years`;
    }
    return 0;
  }

  return (
    <div>
      <CardList>
        {products.map((product) => (
          <CardDb key={product._id}>
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
                <DurabilityTitle>Durability (months):</DurabilityTitle>
                <DurabilityValue>
                  {getAverageDurability(product.durability)}{" "}
                </DurabilityValue>
              </ProductInfoRight>
            </ProductInfo>
          </CardDb>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
