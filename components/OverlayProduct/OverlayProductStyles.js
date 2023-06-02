import styled from "styled-components";

export const Container = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Content = styled.div`
 background-color: white;
 padding: 20px;
 border-radius: 10px;
 width: 80%;
 max-width: 400px;
`;

export const Title = styled.h2`
 margin-top: 0;
`;

export const Label = styled.label`
 display: block;
 margin-bottom: 10px;
`;

export const Button = styled.button`
 background-color: #333;
 color: white;
 border: none;
 padding: 10px 15px;
 border-radius: 5px;
 cursor: pointer;

 &:hover {
 background-color: #555;
 }

 &:not(:last-child) {
 margin-right: 10px;
 }
`;

