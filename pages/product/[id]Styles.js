// pages/product/[id]Styles.js

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
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  `;

export const ProductImage = styled.img`
 width: 75%;
 height: 75%;
 object-fit: scale-down;
`;

export const CarouselButtonLeft = styled.button`
 position: absolute;
 bottom: 15px;
 left: calc(50% - 40px);
 border-radius: 10px;
 border: 1px solid #ccc;
 box-shadow: 0 0 10px 0 #ccc;
`;

export const CarouselButtonRight = styled.button`
 position: absolute;
 bottom: 15px;
 right: calc(50% - 40px);
 border-radius: 10px;
 border: 1px solid #ccc;
 box-shadow: 0 0 10px 0 #ccc;
`;

export const ImageCounter = styled.span`
 position: absolute;
 bottom: 15px;
 left: calc(50% -20px);
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

export const DurabilityWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  padding: 10px;
`;

export const DurabilityTitle = styled.h3`
  font-weight: bold;
  margin-right: auto;
`;

export const DurabilityValue = styled.h1`
  margin-left: 0px;
  margin-top: -5px;

`;

export const DurabilityButton = styled.button`
  margin-top: -5px;
  border-radius: 7px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  padding: 5px;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    box-shadow: inset 0px 0px 5px #c1c1c1;
    transform: translateY(2px);
  }
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
  flex-wrap: wrap;
  
`;

export const OfferItem = styled.li`
  margin-top: -10px;
  margin-right: 10px;

  img {
    width: 70px;
    height: 40px;
    object-fit: contain;
  }
`;

export const OfferPrice = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;
