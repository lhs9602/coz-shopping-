import React from "react";
import styled from "styled-components";
import Bookmarkimg from "./북마크 아이콘 - off.png";

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

export default function Product({ items}){
  const handleClick = () => {
  };

  return (
    <ProductWrapper>
      <ImageWrapper>
        <Image src={items.image_url} alt={items.title} />
        <BookmarkIcon src={Bookmarkimg} alt="Bookmark" onClick={handleClick} />
      </ImageWrapper>
      <TextWrapper>
        <Name>{items.title}</Name>
      </TextWrapper>
    
    </ProductWrapper>
  );
};

