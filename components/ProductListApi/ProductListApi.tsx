// components/ProductListApi/ProductListApi.tsx

import React, { useState } from "react";
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
import Overlay from "../OverlayProductList/OverlayProductList";

interface Props {
  products: ApiProduct[];
}

const ProductListApi: React.FC<Props> = ({ products }) => {
  const [imageIndex, setImageIndex] = useState<Record<string, number>>({});
  const [noWorkingImages, setNoWorkingImages] = useState<
    Record<string, boolean>
  >({});
  const [selectedProduct, setSelectedProduct] = useState<ApiProduct | null>(
    null
  );
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageError = (product: ApiProduct) => {
    console.log(`Image failed to load for product with EAN: ${product.ean}`);

    if (imageIndex[product.ean] + 1 < product.images.length) {
      setImageIndex((prev) => ({
        ...prev,
        [product.ean]: prev[product.ean] + 1 || 1,
      }));
    } else {
      console.log(
        `No working images found for product with EAN: ${product.ean}`
      );
      setNoWorkingImages((prev) => ({ ...prev, [product.ean]: true }));
    }
  };

  const handleAddProduct = (product: ApiProduct) => {
    setSelectedProduct(product);
    handleShowOverlay();
  };

  const handleShowOverlay = () => {
    setShowOverlay(true);
  };

  const handleHideOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <CardListApi>
        {products.map((product) => {
          if (
            !product.images.length ||
            !product.images[0] ||
            noWorkingImages[product.ean]
          )
            return null;
          return (
            <CardApi key={product.ean}>
              <ProductName>
                {product.title.length > 37
                  ? product.title.slice(0, 37) + "..."
                  : product.title}
              </ProductName>
              <ProductInfo>
                <ImageWrapper>
                  <Image
                    src={product.images[imageIndex[product.ean] || 0]}
                    alt="Product Image"
                    onError={() => handleImageError(product)}
                  />
                </ImageWrapper>
                <EanWrapper>
                  <EAN>EAN: {product.ean}</EAN>
                </EanWrapper>
                <ProductInfoRight>
                  <PriceTitle>Price:</PriceTitle>
                  <PriceValue>${product.lowest_recorded_price}</PriceValue>
                  <button onClick={() => handleAddProduct(product)}>
                    Share durability + Add to database
                  </button>
                </ProductInfoRight>
              </ProductInfo>
            </CardApi>
          );
        })}
      </CardListApi>
      {selectedProduct && showOverlay && (
        <Overlay product={selectedProduct} onCancel={handleHideOverlay} />
      )}
    </div>
  );
};

export default ProductListApi;
