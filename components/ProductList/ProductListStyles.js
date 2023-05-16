/* components/ProductList/ProductListStyles.js
\ */

import styled, { css } from 'styled-components';

export const CardList = styled.ul`
  color: #6f6f6f;
  display: flex;
  flex-wrap: wrap;
  gap:8px;
  justify-content: center;
`;

export const Card = styled.li`
  width: 400px;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  `;

export const ImageWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
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


@media (min-width: 500px) {
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
}
`;

export const ProductInfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0px 0px 0px 5px;
`;

export const ProductInfo = styled.div`
  text-align: left;
  flex-grow: 1;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
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

export const MoreLink = styled.a`
  color: blue;
  cursor: pointer;
`;

export const Durability = styled.p`
  margin: 5px 0px 0px 0px;
  font-style: italic;
  padding: 10px;
  border-radius: 10px;
  background-color: #F8F6F4;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 0 #ccc;
`;
