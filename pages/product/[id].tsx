// pages/product/[id].tsx

import React, { useState } from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../../db/connect";
import { DbProduct, Durability } from "../../db/models/DbProduct";
import { getAverageDurability } from "../../components/AverageDurability/AverageDurability";
import Image from "next/image";
import AddDurability from "../../components/OverlayProduct/OverlayProduct";
import {
  CardDb,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  ProductImage,
  CarouselButton,
  ImageCounter,
  ProductInfoWrapper,
  ProductInfoTitle,
  ProductInfoText,
  DurabilityWrapper,
  DurabilityTitle,
  DurabilityValue,
  DurabilityButton,
  OffersWrapper,
  OffersTitle,
  OffersList,
  OfferItem,
  OfferPrice,
} from "./[id]Styles";

interface Props {
  product: DbProduct;
}

export default function ProductPage({ product }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(product.images);
  const [showAddDurability, setShowAddDurability] = useState(false);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageError = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (index === imageIndex) {
      setImageIndex(0);
    }
  };

  function getLogoPath(domain: string) {
    const domainParts = domain.split(".");
    const logoFileNames = [
      "indigo",
      "adorama",
      "bestbuy",
      "sears",
      "argos",
      "walmart",
      "rakuten",
      "newegg",
      "target",
      "brookstone",
      "pricefalls",
      "macys",
      "guitarcenter",
      "musiciansfriend",
      "onbuy",
    ];

    for (const part of domainParts) {
      if (logoFileNames.includes(part)) {
        return `/logos/${part}.png`;
      }
    }

    return ""; // return an empty string if no matching logo is found
  }

  const handleAddDurability = async (
    durabilityStart: string,
    durabilityEnd: string
  ) => {
    // Send a request to your API to update the product in the database with the new durability experience
    // ...

    // Hide the AddDurability component
    setShowAddDurability(false);
  };

  return (
    <CardDb>
      <ProductWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <ImageWrapper>
          {images.length > 1 && (
            <CarouselButton onClick={handlePrevImage}>{"<"}</CarouselButton>
          )}
          <ProductImage
            src={images[imageIndex]}
            alt="Product Image"
            onError={() => handleImageError(imageIndex)}
          />
          {images.length > 1 && (
            <>
              <CarouselButton onClick={handleNextImage}>{">"}</CarouselButton>
              <ImageCounter>
                {imageIndex + 1}/{images.length}
              </ImageCounter>
            </>
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
        <DurabilityWrapper>
          <DurabilityTitle>Durability:</DurabilityTitle>
          <DurabilityValue>
            {getAverageDurability(product.durability)}
          </DurabilityValue>
          <DurabilityButton onClick={() => setShowAddDurability(true)}>
            Add your durability experience!
          </DurabilityButton>
        </DurabilityWrapper>
        <OffersWrapper>
          <OffersTitle>Offers:</OffersTitle>
          <OffersList>
            {product.offers
              .slice()
              .sort((a, b) => a.price - b.price)
              .map((offer) => (
                <OfferItem key={offer.merchant}>
                  <a
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <Image
                        src={getLogoPath(offer.domain)}
                        alt={`${offer.merchant} logo`}
                        width={50} // specify the width
                        height={50} // specify the height
                      />
                      <OfferPrice>${offer.price}</OfferPrice>
                    </div>
                  </a>
                </OfferItem>
              ))}
          </OffersList>
        </OffersWrapper>

        {showAddDurability && (
          <AddDurability
            product={product}
            onCancel={() => setShowAddDurability(false)}
            onSave={handleAddDurability}
          />
        )}
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
  const product = await DbProduct.findById(id).populate("durability");

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
};
