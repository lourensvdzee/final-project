// pages/[id].tsx

import React, { useState } from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../../db/connect";
import { DbProduct } from "../../db/models/DbProduct";
import {
  CardDb,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  ProductImage,
  CarouselButton,
  ProductInfoWrapper,
  ProductInfoTitle,
  ProductInfoText,
  OffersWrapper,
  OffersTitle,
  OffersList,
  OfferItem,
} from "./[id]Styles";

interface Props {
  product: DbProduct;
}

export default function ProductPage({ product }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <CardDb>
      <ProductWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <ImageWrapper>
          {product.images.length > 1 && (
            <CarouselButton onClick={handlePrevImage}>{"<"}</CarouselButton>
          )}
          <ProductImage src={product.images[imageIndex]} alt="Product Image" />
          {product.images.length > 1 && (
            <CarouselButton onClick={handleNextImage}>{">"}</CarouselButton>
          )}
        </ImageWrapper>
        <ProductInfoWrapper>
          <ProductInfoTitle>Brand:</ProductInfoTitle>
          <ProductInfoText>{product.brand}</ProductInfoText>
          <ProductInfoTitle>Model:</ProductInfoTitle>
          <ProductInfoText>{product.model}</ProductInfoText>
          <ProductInfoTitle>Description:</ProductInfoTitle>
          <ProductInfoText>{product.description}</ProductInfoText>
          <ProductInfoTitle>Color:</ProductInfoTitle>
          <ProductInfoText>{product.color}</ProductInfoText>
        </ProductInfoWrapper>
        <OffersWrapper>
          <OffersTitle>Offers:</OffersTitle>
          <OffersList>
            {/* Replace this with real data from the API */}
            <OfferItem>Merchant A</OfferItem>
            <OfferItem>Merchant B</OfferItem>
            <OfferItem>Merchant C</OfferItem>
          </OffersList>
        </OffersWrapper>
      </ProductWrapper>
    </CardDb>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // Connect to the MongoDB database using Mongoose
  await dbConnect();

  // Get the id of the product from the URL
  const id = context.params?.id;

  // Fetch detailed information about the product from the database
  const product = await DbProduct.findById(id);

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
};
