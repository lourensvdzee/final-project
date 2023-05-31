// components/Overlay/Overlay.tsx

import React, { useState } from "react";
import styled from "styled-components";
import { ApiProduct } from "../../db/models/ApiProduct";
import MonthYearInput from "../MonthYearInput/MonthYearInput";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background-color: white;
  padding: 16px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  margin-top: 8px;
`;

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
