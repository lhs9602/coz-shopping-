import React from "react";
import styled from "styled-components";
import BookmarkimgOff from "Components/ItemList/Items/북마크 아이콘 - off.png";
import BookmarkimgOn from "Components/ItemList/Items/북마크 아이콘 - on.png";
import {useDispatch} from "react-redux";
import {bookMarkOut, bookMarkIn} from "Redux/reducer/reducer.js";


const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div `
  position: relative;
  width: 744px;
  height: 480px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button `
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  font-size: 34px;
font-weight: 200;
color: white;

`;

const ModalImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const InfoWrapper = styled.div `
display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 12px;
  margin: 10px;
`;

const BookmarkIcon = styled.img `
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`;

const Name = styled.div `
color: white;
font-family: Inter;
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

`;

const Modal = ({image, name, onClose,id, bookmark}) => {
    const dispatch = useDispatch();

    const handleBookmark = () => {
        if (bookmark === true) {
            dispatch(bookMarkOut(id));
        } else if (bookmark === false) {
            dispatch(bookMarkIn(id));
        }
    };
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalImage src={image} alt={name}/>
                <InfoWrapper>
                    {
                        bookmark
                            ? (
                                <BookmarkIcon src={BookmarkimgOn} onClick={handleBookmark} alt="BookmarkON"/>
                            )
                            : (
                                <BookmarkIcon src={BookmarkimgOff} onClick={handleBookmark} alt="BookmarkOff"/>
                            )
                    }
                    <Name>{name}</Name>
                </InfoWrapper>
                <CloseButton onClick={onClose}>x</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;