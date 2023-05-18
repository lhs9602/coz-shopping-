import styled from "styled-components";


export const ProductWrapper = styled.div `
  height: 264px;
  width: 264px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div `
  position: relative;
  height: 210px;
  width: 100%;
`;

export const Image = styled.img `
  height: 100%;
  width: 100%;
  background-color: gray;
`;

export const TextWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Name = styled.div `
  color: #000;
  font-weight: bold;
`;

export const Customer = styled.div `
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

export const Follow = styled.div `
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;
`;

export const Intro = styled.div `
color: #000;
margin-top: 4px;
font-size: 15px;
`;

export const ProductName = styled.div `
  color: #000;
  font-weight: bold;
  font-size: 15px;

`;

export const Discount = styled.div `
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

export const Price = styled.div `
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;

`;