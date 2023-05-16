import React, { useEffect, useState } from "react";
import styled, { keyframes,css  } from "styled-components";
import BookmarkOff from "Components/Common/Bookmark/북마크 아이콘 - off.png"
import BookmarkOn from "Components/Common/Bookmark/북마크 아이콘 - on.png"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translatex(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translatex(100%);
  }
`;


const ToastContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  align-items: center;
  width: 280px;
  height: 52px;
  right: 28px;
  bottom: 28px;
  font-weight: 700;
  font-family: 'Inter';
  font-style: normal;
  font-size: 14px;
  color: #000000;
  animation: ${({ showToast }) =>
    showToast
      ? css`
          ${fadeIn} 0.5s ease-out,
          ${fadeOut} 0.5s 3s forwards
        `
      : 'none'};
  z-index: 999;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
`;



export default function Toast({ message, duration,bookmark }) {
    const [showToast, setShowToast] = useState(false);
  
    useEffect(() => {
      let toastTimer;
  
      if (message) {
        setShowToast(true);
        clearTimeout(toastTimer);
  
        toastTimer = setTimeout(() => {
          setShowToast(false);
        }, duration);
      }
  
      return () => {
        clearTimeout(toastTimer);
      };
    }, [message, duration]);
  
    return showToast ? 
    <ToastContainer showToast={showToast}>
        {bookmark ? 
        <img src={BookmarkOn} alt="BookmarkOn" />
        : 
        <img src={BookmarkOff} alt="BookmarkOff" />}
        {message}
        </ToastContainer> 
        : null;
  }