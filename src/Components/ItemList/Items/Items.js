import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  height: 264px;
  width: 264px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 210px;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.div`
  color: #000;
  font-weight: bold;
`;

const Discount = styled.div`
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

const Price = styled.div`
  color: #000;
  font-weight: bold;
  margin-top: 4px;
`;

const Product = ({ image, name, price, discount, bookmark }) => {
  const handleClick = () => {
  };

  return (
    <ProductWrapper>
      <ImageWrapper>
        <Image src={image} alt="Product" />
        <BookmarkIcon src={"북마크 이미지"} alt="Bookmark" onClick={handleClick} />
      </ImageWrapper>
      <TextWrapper>
        <Name>{name}</Name>
        <Discount>{discount}</Discount>
      </TextWrapper>
      <Price>{price}</Price>
    </ProductWrapper>
  );
};

export default Product;
