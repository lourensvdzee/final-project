/* components/ProductList/ProductListStyles.js
\ */

import styled from 'styled-components';

export const CardList = styled.ul`
  list-style: none;
  color: #6f6f6f;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:8px;
  margin: auto;
  padding: 0;
`;

export const Card = styled.li`
  width: 320px;
  min-height: 200px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  `;

export const ProductName = styled.h3`
  margin: 0;
  white-space: nowrap;
  `;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: repeat(4, 1fr); */
`;

export const ImageWrapper = styled.div`
  max-width:150px;
  max-height: 150px;
  grid-column: 1 / span 2;
  grid-row: 1; 
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
`;

export const Image = styled.img`
  max-width: 95%;
  max-height: 95%;
`;

export const EanWrapper = styled.div`
  max-width:150px;
  max-height: 150px;
  grid-column: 1;
  grid-row: 2;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  margin-top: 5px;
  `;

export const EAN = styled.p`
  margin: 5px;
  text-align: center;
`;

export const ProductInfoRight = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  display: flex;
  flex-direction: column;
  `;

export const PriceTitle = styled.p`
justify-self: center;
align-self: center;
margin-top: 20px;
`;

export const PriceValue = styled.p`
justify-self: center;
align-self: center;
font-weight: bold;
font-size: 1.6em;
margin-top: 0px;
`;

export const DurabilityTitle = styled.p`
justify-self: center;
align-self: center;
margin-top: 20px;
`;

export const DurabilityValue = styled.p`
justify-self: center;
align-self: center;
font-weight: bold;
font-size: 1.4em;
margin-top: 0px;
`;