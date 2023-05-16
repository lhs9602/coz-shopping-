import React, {useState} from "react";
import styled from "styled-components";
import Modal from "Components/Modal/Modal.js";
import Bookmark from "Components/Common/Bookmark/Bookmark.js";


const ProductWrapper = styled.div `
  height: 264px;
  width: 264px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div `
  position: relative;
  height: 210px;
  width: 100%;
`;

const Image = styled.img `
  height: 100%;
  width: 100%;
  background-color:gray;
`;

const TextWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.div `
  color: #000;
  font-weight: bold;
  font-size: 15px;

`;

const Discount = styled.div `
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

const Price = styled.div `
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;

`;

export default function Product({items,bookmark}) {
    const [isOpen, setIsOpen] = useState(false);
    const [CurrentBookmark,SetBookmark]=useState(bookmark);
    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <ProductWrapper >
            <ImageWrapper>
                <Image src={items.image_url} alt={items.title} onClick={handleClick}/> 
                <Bookmark bookmark={CurrentBookmark} SetBookmark={SetBookmark} id={items.id}/>
            </ImageWrapper>
            <TextWrapper>
                <Name>{items.title}</Name>
                <Discount>{items.discountPercentage}%</Discount>
            </TextWrapper>
            <Price>{items.price}원</Price>
            {
                isOpen && (
                    <Modal image={items.image_url} name={items.title} onClose={handleClose} id={items.id} bookmark={CurrentBookmark} SetBookmark={SetBookmark}/>
                )
            }
        </ProductWrapper>
    );
};
