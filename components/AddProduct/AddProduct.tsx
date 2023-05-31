// components/AddProduct/AddProduct.tsx

import { ApiProduct } from "../../db/models/ApiProduct";
import React, { useState, useEffect } from "react";
import MonthYearInput from "../MonthYearInput/MonthYearInput";

interface Props {
  product: ApiProduct;
}

const AddProduct: React.FC<Props> = ({ product }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  }, [startDate, endDate]);

  const handleAddProduct = async () => {
    const productData = {
      title: product.title,
      ean: product.ean,
      images: product.images,
      lowest_recorded_price: product.lowest_recorded_price,
      durabilityStart: `${startDate}-01`,
      durabilityEnd: `${endDate}-01`,
    };

    console.log("Product Data:", productData);

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
      } else {
        console.error("Failed to add product to the database.");
      }
    } catch (error) {
      console.error("Error adding product to the database:", error);
    }
  };

  console.log("Product:", product);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt="Product Image" />
      <label>
        Start Date:
        <MonthYearInput value={startDate} onChange={setStartDate} />
      </label>
      <br />
      <label>
        End Date:
        <MonthYearInput value={endDate} onChange={setEndDate} />
      </label>
      <br />
      <button onClick={handleAddProduct}>Save</button>
    </div>
  );
};

export default AddProduct;
