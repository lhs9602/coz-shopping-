import React, {useState} from "react";
import Modal from "Components/Modal/Modal.js";
import Bookmark from "Components/Common/Bookmark/Bookmark.js";
import {ProductWrapper,ImageWrapper,Image,TextWrapper,ProductName,Discount,Price} from "./ItemStyles.css";


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
                <ProductName>{items.title}</ProductName>
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
