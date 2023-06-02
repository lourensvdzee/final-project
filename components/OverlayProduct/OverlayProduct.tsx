import React, { useState } from "react";
import MonthYearInput from "../../utils/monthYearInput";
import { ApiProduct } from "../../db/models/ApiProduct";
import {
  Container,
  Content,
  Title,
  Label,
  Button,
} from "./OverlayProductStyles.js";

interface Props {
  product: ApiProduct;
  onCancel: () => void;
  onSave: (durabilityStart: string, durabilityEnd: string) => void;
}

const AddDurability: React.FC<Props> = ({ product, onCancel, onSave }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    onSave(startDate, endDate);
  };

  return (
    <Container>
      <Content>
        <Title>Add Durability Experience</Title>
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

export default AddDurability;
