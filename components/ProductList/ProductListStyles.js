/* components/ProductList/ProductListStyles.js
\ */

import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap:5px;
  justify-content: center;
`;

export const Card = styled.li`
  max-width: 300px;
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  `;

export const ImageWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    `;

export const Image = styled.img`
display: inline-block;
margin: 5px;
width: 15vw;
object-fit: cover;
  margin-bottom: 10px;
  `;

export const ProductInfo = styled.div`
  width: 45vw;
  height: 100%;
  text-align: left;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  margin: 0;
`;

export const EAN = styled.p`
  font-size: 12px;
`;

export const Description = styled.p`
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Durability = styled.p`
  margin: 5px 0;
  font-style: italic;
  
  margin-top: auto;
`;
