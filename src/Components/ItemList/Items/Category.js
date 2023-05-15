import React, {useState} from "react";
import styled from "styled-components";
import BookmarkimgOff from "./북마크 아이콘 - off.png";
import BookmarkimgOn from "./북마크 아이콘 - on.png";
import Modal from "Components/Modal/Modal.js";
import {useDispatch} from "react-redux";
import {bookMarkOut, bookMarkIn} from "Redux/reducer/reducer.js";

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

const BookmarkIcon = styled.img `
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

const Name = styled.div `
  color: #000;
  font-weight: bold;
`;

export default function Product({items}) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleBookmark = () => {
        console.log(items.bookmark);
        if (items.bookmark === true) {
            dispatch(bookMarkOut(items.id));
        } else if (items.bookmark === false) {
            dispatch(bookMarkIn(items.id));
        }
    };

    return (
        <ProductWrapper >
            <ImageWrapper>
                <Image src={items.image_url} alt={items.title} onClick={handleClick}/> {
                    items.bookmark
                        ? (
                            <BookmarkIcon src={BookmarkimgOn} onClick={handleBookmark} alt="BookmarkON"/>
                        )
                        : (
                            <BookmarkIcon src={BookmarkimgOff} onClick={handleBookmark} alt="BookmarkOff"/>
                        )
                }
                <Name>#{items.title}</Name>

            </ImageWrapper>
            {
                isOpen && (
                    <Modal image={items.image_url} name={items.title} onClose={handleClose} id={items.id} bookmark={ items.bookmark}/>
                )
            }
        </ProductWrapper>
    );
};
