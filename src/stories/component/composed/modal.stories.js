import React, {useState} from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    ModalImage,
    InfoWrapper,
    Name
} from "Components/Modal/ModalStyles.css";
import cardimg from "./cardimg.jpg";
import styled from "styled-components";
import BookmarkOff from "Components/Common/Bookmark/북마크 아이콘 - off.png";
import BookmarkOn from "Components/Common/Bookmark/북마크 아이콘 - on.png";

const ModalBookmark = styled.img `
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`;

function Modal({image, name, onClose, primary}) {
    const [CurrentBookmark, SetBookmark] = useState(primary);

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalImage src={image} alt={name}/>
                <InfoWrapper>
                    <ModalBookmark
                        src={CurrentBookmark
                            ? BookmarkOn
                            : BookmarkOff}
                        onClick={() => {
                            SetBookmark(!CurrentBookmark)
                        }}/>
                    <Name>{name}</Name>
                </InfoWrapper>
                <CloseButton color="black" onClick={onClose}>x</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
}

export default {
    title: 'composed/Modal', // 스토리 분류 및 컴포넌트 이름
    component: Modal, // 테스트할 컴포넌트(Divider)
    parameters: {
        backgrounds: {
            default: {
                value: 'light'
            }, // 스토리의 배경색 설정
        }
    },
    controls: {
        hideNoControlsWarning: true
    }, // 컨트롤 경고 메시지 숨김 설정
};

export function ModalButton(args){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleClick}>open modal</button>
            {isOpen && (<Modal {...args} onClose={handleClose}/>)}</div>
    )

};

ModalButton.args = {
    image: cardimg,
    name: "나만의 상품",
    primary: true
}