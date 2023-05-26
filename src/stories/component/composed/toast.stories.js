import BookmarkOff from "Components/Common/Bookmark/북마크 아이콘 - off.png";
import BookmarkOn from "Components/Common/Bookmark/북마크 아이콘 - on.png";
import React, { useEffect, useState } from "react";

import { ToastContainer } from "Components/toast/ToastStyles.css";


function Toast({ message, duration, SetBookmark,bookmark,setIsOpen }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let toastTimer;

    if (message) {
      setShowToast(true);
      clearTimeout(toastTimer);

      toastTimer = setTimeout(() => {
        setShowToast(false);
        setIsOpen(false);
      }, duration);
    }

    return () => {
      clearTimeout(toastTimer);
    };
  }, [message, duration]);

  return showToast ? (
    <ToastContainer showToast={showToast}>
      {bookmark ? (
        <img onClick={()=>{SetBookmark(!bookmark)}} src={BookmarkOn} alt="BookmarkOn" />
      ) : (
        <img onClick={()=>{SetBookmark(!bookmark)}} src={BookmarkOff} alt="BookmarkOff" />
      )}
      {message}
    </ToastContainer>
  ) : null;
}



export default {
    title: 'composed/Toast', // 스토리 분류 및 컴포넌트 이름
    component: Toast, // 테스트할 컴포넌트(Divider)
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };


  export function ToastButton(){
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [bookmark, SetBookmark] = useState(false);
  
    const handleClick = () => {
        if (bookmark) {
            setToastMessage("상품이 북마크에서 제거되었습니다.");
          } else {
            setToastMessage("상품이 북마크에서 추가되었습니다.");
          }
        setIsOpen(true);
    };


    return (
        <div>
            <button onClick={handleClick}>open Toast</button>
            {isOpen && (<Toast setIsOpen={setIsOpen} bookmark={bookmark} message={toastMessage} duration={3000} SetBookmark={SetBookmark}/>)}</div>
    )

};

ToastButton.args = {
  
}