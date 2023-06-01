// pages/[id]Styles.js

import styled from "styled-components";

export const CardDb = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  background: #d2e9e9;
  width: 320px;
  min-height: 200px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  margin: auto;
`;

export const ProductWrapper = styled.div`

`;

export const ProductTitle = styled.h2`
`;


export const ImageWrapper = styled.div`
  position: relative;
  max-width:320px;
  max-height: 320px;
  min-width:320px;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  `;

export const CarouselButton = styled.button`
    position: absolute;
    top: calc(93% - 20px);
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px 0 #ccc;
    `;

export const ImageCounter = styled.span`
 position: absolute;
 bottom: 2px;
 right: calc(50% -20px);
`;

export const ProductImage = styled.img`
  max-width: 75%;
  max-height: 75%;
  object-fit: contain;
`;

export const ProductInfoWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  padding: 10px;
  margin-top: 5px;
`;

export const ProductInfoTitle = styled.h3`
  font-weight: bold;
`;

export const ProductInfoText = styled.p`
  font-size: smaller;
`;

export const DurabilityWrapper = styled.p`
border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  padding: 10px;
`;

export const DurabilityTitle = styled.h3`
  font-weight: bold;
`;

export const DurabilityValue = styled.p`
font-size: smaller;
`;

export const OffersWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  padding: 10px;
  margin-top: 5px;
`;

export const OffersTitle = styled.h3`
  font-weight: bold;
`;

export const OffersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const OfferItem = styled.li`
  margin-right: 10px;
`;
