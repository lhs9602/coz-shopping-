import React, { useState, useEffect } from "react";
import BookmarkimgOff from "./북마크 아이콘 - off.png";
import BookmarkimgOn from "./북마크 아이콘 - on.png";
import { useDispatch } from "react-redux";
import { bookMarkOut, bookMarkIn } from "Redux/reducer/reducer.js";
import Toast from "Components/toast/Toast";
import {ModalBookmark} from "./BookmarkStyles.css.js";


export default function Bookmark({ bookmark, id, SetBookmark }) {
  const dispatch = useDispatch();
  const [bookmarkImage, setBookmarkImage] = useState(BookmarkimgOff);
  const [toastMessage, setToastMessage] = useState("");

  const handleBookmark = () => {
    SetBookmark(!bookmark);

    if (bookmark) {
      dispatch(bookMarkOut(id));
      setToastMessage("상품이 북마크에서 제거되었습니다.");
    } else {
      dispatch(bookMarkIn(id));
      setToastMessage("상품이 북마크에서 추가되었습니다.");
    }
  };

  useEffect(() => {
    if (bookmark) {
      setBookmarkImage(BookmarkimgOn);
    } else {
      setBookmarkImage(BookmarkimgOff);
    }
  }, [bookmark]);

  return (
    <>
      <ModalBookmark
        src={bookmarkImage}
        alt={bookmark ? "BookmarkON" : "BookmarkOff"}
        onClick={handleBookmark}
      />
      {toastMessage && (
        <Toast message={toastMessage} bookmark={bookmark} duration={3000} />
      )}
    </>
  );
}
