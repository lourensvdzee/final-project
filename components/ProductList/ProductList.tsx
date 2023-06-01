// components/ProductList/ProductList.tsx

import React from "react";
import Link from "next/link";
import { getAverageDurability } from "../../components/AverageDurability/AverageDurability";
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
  return (
    <div>
      <CardList>
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div>
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
            </div>
          </Link>
        ))}
      </CardList>
    </div>
  );
};

export default ProductList;
