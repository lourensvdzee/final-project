// components/AddProduct/AddProduct.tsx

import { ApiProduct } from "../../db/models/ApiProduct";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

interface Props {
  product: ApiProduct;
}

const MonthYearInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const [date, setDate] = useState(
    value ? DateTime.fromISO(value) : DateTime.now()
  );

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = date.set({ month: parseInt(event.target.value) });
    setDate(newDate);
    onChange(newDate.toISODate().slice(0, 7));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = date.set({ year: parseInt(event.target.value) });
    setDate(newDate);
    onChange(newDate.toISODate().slice(0, 7));
  };

  return (
    <>
      <select value={date.month} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <option key={month} value={month}>
            {DateTime.fromObject({ month }).toFormat("LLL")}
          </option>
        ))}
      </select>
      <select value={date.year} onChange={handleYearChange}>
        {Array.from({ length: 11 }, (_, i) => i + date.year - 5).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

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
