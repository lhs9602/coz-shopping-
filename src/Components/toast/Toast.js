import React, { useEffect, useState } from "react";
import { ToastContainer } from "./ToastStyles.css";
import BookmarkOffImage from "Components/Common/Bookmark/북마크 아이콘 - off.png";
import BookmarkOnImage from "Components/Common/Bookmark/북마크 아이콘 - on.png";

export default function Toast({ message, duration, bookmark }) {
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

  return showToast ? (
    <ToastContainer showToast={showToast}>
      {bookmark ? (
        <img src={BookmarkOnImage} alt="BookmarkOn" />
      ) : (
        <img src={BookmarkOffImage} alt="BookmarkOff" />
      )}
      {message}
    </ToastContainer>
  ) : null;
}
