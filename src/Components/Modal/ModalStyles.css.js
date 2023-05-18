import styled from "styled-components";

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
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

export const CloseButton = styled.button`
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

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 12px;
  margin: 10px;
`;

export const Name = styled.div`
  color: white;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

