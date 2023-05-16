import React from "react";
import BookmarkimgOff from "./북마크 아이콘 - off.png";
import BookmarkimgOn from "./북마크 아이콘 - on.png";
import {useDispatch} from "react-redux";
import {bookMarkOut, bookMarkIn} from "Redux/reducer/reducer.js";
import styled from "styled-components";


const ModalBookmark = styled.img `
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`;


export default function Bookmark({bookmark,id,SetBookmark}) {
    const dispatch = useDispatch();

    const handleBookmark = () => {
        SetBookmark(!bookmark);
        if (bookmark) {
            dispatch(bookMarkOut(id));
        } else {
            dispatch(bookMarkIn(id));
        }
    };

    return (<> {
        bookmark
            ? 
            (
            <ModalBookmark src={BookmarkimgOn} alt="BookmarkON" onClick={handleBookmark}/>
            )
            : 
            (
            <ModalBookmark src={BookmarkimgOff} alt="BookmarkOff" onClick={handleBookmark}/>
            )
    } </>
    );
  };