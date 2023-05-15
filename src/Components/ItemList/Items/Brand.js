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
  background-color: gray;
`;

const BookmarkIcon = styled.img `
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

const TextWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.div `
  color: #000;
  font-weight: bold;
`;

const Customer = styled.div `
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

const Follow = styled.div `
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;
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
        <ProductWrapper>
            <ImageWrapper>
                <Image src={items.brand_image_url} alt={items.title} onClick={handleClick}/> {
                    items.bookmark
                        ? (
                            <BookmarkIcon src={BookmarkimgOn} onClick={handleBookmark} alt="BookmarkON"/>
                        )
                        : (
                            <BookmarkIcon src={BookmarkimgOff} onClick={handleBookmark} alt="BookmarkOff"/>
                        )
                }
            </ImageWrapper>
            <TextWrapper>
                <Name>{items.brand_name}</Name>
                <Customer>관심고객 수</Customer>
            </TextWrapper>
            <Follow>{items.follower}</Follow>

            {
                isOpen && (
                    <Modal
                        image={items.brand_image_url}
                        name={items.brand_name}
                        onClose={handleClose}
                        bookmark={ items.bookmark}
                        id={items.id}
                        />
                )
            }
        </ProductWrapper>
    );
}
