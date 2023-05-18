import React from "react";
import ModalBookmark from "Components/Common/Bookmark/ModalBookmark.js";
import {ModalOverlay,ModalContent,CloseButton,ModalImage,InfoWrapper,Name} from "./ModalStyles.css";

export default function Modal({ image, name, onClose, id, bookmark, SetBookmark }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImage src={image} alt={name} />
        <InfoWrapper>
          <ModalBookmark bookmark={bookmark} SetBookmark={SetBookmark} id={id} modal={true} />
          <Name>{name}</Name>
        </InfoWrapper>
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}
