// pages/product/[id].tsx

import React, { useState } from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../../db/connect";
import { DbProduct, Durability } from "../../db/models/DbProduct";
import { getAverageDurability } from "../../utils/averageDurability";
import Image from "next/image";
import AddDurability from "../../components/OverlayProduct/OverlayProduct";
import { getLogoPath } from "../../utils/getLogoPath";
import {
  handlePrevImage,
  handleNextImage,
  handleImageError,
} from "../../utils/imageHandlers";
import BellCurve from "../../components/BellCurve/BellCurve";
import {
  CardDb,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  ProductImage,
  CarouselButtonLeft,
  CarouselButtonRight,
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
  DurabilityValueWrapper,
  DurabilityCount,
} from "../../styles/productPageStyles";

interface Props {
  product: DbProduct;
}

export default function ProductPage({ product }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(product.images);
  const [showAddDurability, setShowAddDurability] = useState(false);

  const handleAddDurability = async (
    durabilityStart: string,
    durabilityEnd: string
  ) => {
    // Send a request to your API to update the product in the database with the new durability experience
    try {
      const res = await fetch(`/api/products/${product._id}/durability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start: new Date(durabilityStart),
          end: new Date(durabilityEnd),
        }),
      });

      if (res.ok) {
        console.log("Durability added successfully!");
      } else {
        console.error("Failed to add durability to the database.");
      }
    } catch (error) {
      console.error("Error adding durability to the database:", error);
    }

    // Hide the AddDurability component
    setShowAddDurability(false);
  };

  return (
    <CardDb>
      <ProductWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <ImageWrapper>
          {images.length > 1 && (
            <CarouselButtonLeft
              onClick={() => handlePrevImage(images, imageIndex, setImageIndex)}
            >
              {"<"}
            </CarouselButtonLeft>
          )}
          <ProductImage
            src={images[imageIndex]}
            alt="Product Image"
            onError={() =>
              handleImageError(imageIndex, imageIndex, setImageIndex, setImages)
            }
          />
          {images.length > 1 && (
            <>
              <CarouselButtonRight
                onClick={() =>
                  handleNextImage(images, imageIndex, setImageIndex)
                }
              >
                {">"}
              </CarouselButtonRight>

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
          <BellCurve durabilityData={product.durability} />
          <DurabilityValueWrapper>
            <DurabilityValue>
              {getAverageDurability(product.durability)}
            </DurabilityValue>
            <DurabilityCount>({product.durability.length})</DurabilityCount>
          </DurabilityValueWrapper>
          <DurabilityButton onClick={() => setShowAddDurability(true)}>
            Add your durability experience!
          </DurabilityButton>
        </DurabilityWrapper>
        <OffersWrapper>
          <OffersTitle>Offers:</OffersTitle>
          <OffersList>
            {product.offers
              .filter((offer) => getLogoPath(offer.domain) !== "")
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
