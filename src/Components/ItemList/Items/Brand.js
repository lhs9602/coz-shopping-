import React, { useState } from "react";
import styled from "styled-components";
import Bookmarkimg from "./북마크 아이콘 - off.png";
import Modal from "Components/Modal/Modal.js";

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
  background-color: gray;
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

const Customer = styled.div`
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

const Follow = styled.div`
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;
`;

export default function Product({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ProductWrapper onClick={handleClick}>
      <ImageWrapper>
        <Image src={items.brand_image_url} alt={items.title} />
        <BookmarkIcon src={Bookmarkimg} alt="Bookmark" />
      </ImageWrapper>
      <TextWrapper>
        <Name>{items.brand_name}</Name>
        <Customer>관심고객 수</Customer>
      </TextWrapper>
      <Follow>{items.follower}</Follow>

      {isOpen && (
        <Modal
          image={items.brand_image_url}
          name={items.brand_name}
          onClose={handleClose}
        />
      )}
    </ProductWrapper>
  );
}
