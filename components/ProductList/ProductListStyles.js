/* components/ProductList/ProductListStyles.js
\ */

import styled from 'styled-components';

export const CardList = styled.ul`
  color: #6f6f6f;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:8px;
  margin: auto;
  padding: 0;
`;

export const Card = styled.li`
  min-width: 230px;
  min-height: 200px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

export const ProductInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: center;
`;

export const ImageWrapper = styled.div`   
  grid-row: 1 / 3;
  max-width: 100%;
  max-height: 100%;
  /* display: flex;
  flex-wrap: wrap; */
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
`;

export const Image = styled.img`
  display: inline-block;
  max-width: 30vw;
  max-height:42vw;
  object-fit: cover;
  margin: 5px;

/* @media (min-width: 500px) {
    max-width: 20vw;
    max-height:25vw;
}

@media (min-width: 800px) {
    max-width: 15vw;
    max-height: 20vw;
}

@media (min-width: 1000px) {
    max-width: 10vw;
    max-height: 15vw;
}

@media (min-width: 1600px) {
    max-width: 5vw;
    max-height: 10vw;
} */
`;

// export const ProductInfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0px 0px 0px 5px;
//   `;

export const ProductInfo = styled.div`
  grid-column: 2;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
  /* flex-grow: 1; */
  /* display: flex; */
  /* flex-direction: column; */
`;

export const ProductName = styled.h3`
  margin: 0;
`;

export const Price = styled.p`
  font-size: 12px;
`;

export const EAN = styled.p`
  margin: 0;
  font-size: 12px;
`;

// export const Description = styled.p`
//   margin: 5px 0;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const MoreLink = styled.a`
//   color: blue;
//   cursor: pointer;
// `;

export const Durability = styled.p`
  margin: 5px 0px 0px 0px;
  font-style: italic;
  padding: 10px;
  border-radius: 10px;
  background-color: #F8F6F4;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
`;

