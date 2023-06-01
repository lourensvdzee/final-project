// components/Overlay/Overlay.tsx

import React, { useState } from "react";
import { ApiProduct } from "../../db/models/ApiProduct";
import MonthYearInput from "../MonthYearInput/MonthYearInput";
import {
  Container,
  Content,
  Title,
  Label,
  Button,
  ProductImage,
  ProductInfo,
} from "./OverlayStyles";

interface Props {
  product: ApiProduct;
  onCancel: () => void;
}

const Overlay: React.FC<Props> = ({ product, onCancel }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = async () => {
    const productData = {
      title: product.title,
      ean: product.ean,
      images: product.images,
      lowest_recorded_price: product.lowest_recorded_price,
      durabilityStart: `${startDate}-01`,
      durabilityEnd: `${endDate}-01`,
      brand: product.brand,
      model: product.model,
      description: product.description,
      color: product.color,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        console.log("Product added successfully!");
        onCancel();
      } else {
        console.error("Failed to add product to the database.");
      }
    } catch (error) {
      console.error("Error adding product to the database:", error);
    }
  };

  return (
    <Container>
      <Content>
        <Title>{product.title}</Title>
        <ProductImage src={product.images[0]} alt="Product Image" />
        <ProductInfo>
          <Label>Brand: {product.brand}</Label>
          <Label>Model: {product.model}</Label>
          <Label>Description: {product.description}</Label>
          <Label>Color: {product.color}</Label>
        </ProductInfo>
        <Label>
          Start Date:
          <MonthYearInput value={startDate} onChange={setStartDate} />
        </Label>
        <Label>
          End Date:
          <MonthYearInput value={endDate} onChange={setEndDate} />
        </Label>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Content>
    </Container>
  );
};

export default Overlay;
