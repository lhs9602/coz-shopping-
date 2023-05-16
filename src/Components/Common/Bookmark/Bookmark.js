import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookMarkOut, bookMarkIn } from "Redux/reducer/reducer.js";
import styled from "styled-components";
import BookmarkimgOff from "./북마크 아이콘 - off.png";
import BookmarkimgOn from "./북마크 아이콘 - on.png";

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export default function Bookmark({ bookmark, id,SetBookmark }) {
  const dispatch = useDispatch();
  const [bookmarkImage, setBookmarkImage] = useState(BookmarkimgOff);

  const handleBookmark = () => {
    SetBookmark(!bookmark);

    if (bookmark===true) {
      dispatch(bookMarkOut(id));
    } else if(bookmark===false){
      dispatch(bookMarkIn(id));
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
    <BookmarkIcon
      src={bookmarkImage}
      alt={bookmark ? "BookmarkON" : "BookmarkOff"}
      onClick={handleBookmark}
    />
  );
}
