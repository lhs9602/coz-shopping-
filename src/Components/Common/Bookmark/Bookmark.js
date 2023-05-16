import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookMarkOut, bookMarkIn } from "Redux/reducer/reducer.js";
import styled from "styled-components";
import BookmarkimgOff from "./북마크 아이콘 - off.png";
import BookmarkimgOn from "./북마크 아이콘 - on.png";
import Toast from "Components/toast/Toast";


const BookmarkIcon = styled.img`
position: absolute;
bottom: 8px;
right: 8px;
cursor: pointer;
`;

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
    <BookmarkIcon
      src={bookmarkImage}
      alt={bookmark ? "BookmarkON" : "BookmarkOff"}
      onClick={handleBookmark}
    />
    {toastMessage && <Toast message={toastMessage} bookmark={bookmark} duration={3000} />}
  </>
);
}