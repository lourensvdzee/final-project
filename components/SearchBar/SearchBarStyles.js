/* components/SearchBar/SearchBarStyles.js
\ */

import styled from "styled-components";

export const Wrap = styled.div`
  width: 50%;
  max-width: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 20px auto;
  margin-top: -32px;
  `;

export const SearchForm = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  `;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  height: 20px;
  outline: none;
  color: #14778e;
  border-right: none;
  border: 3px solid #f1f1f1;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #14778e;
  background: #14778e;
  text-align: center;
  color: #fff;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

`;

export const SearchIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(100%);
`;

