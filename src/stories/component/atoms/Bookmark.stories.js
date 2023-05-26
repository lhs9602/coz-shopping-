import React, { useState } from "react";
import BookmarkimgOff from "Components/Common/Bookmark/북마크 아이콘 - off.png";
import BookmarkimgOn from "Components/Common/Bookmark/북마크 아이콘 - on.png";
import styled from "styled-components";

 const BookmarkIcon = styled.img`

  cursor: pointer;
`;


 function Bookmark({primary}) {
  const [bookmark, setBookmark] = useState(primary);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  
  return (
    <>
      <BookmarkIcon
        src={bookmark? BookmarkimgOn:BookmarkimgOff}
        alt={bookmark ? "BookmarkON" : "BookmarkOff"}
        onClick={handleBookmark}
      />
    </>
  );
}


export default {
    title: 'atoms/Bookmark', // 스토리 분류 및 컴포넌트 이름
    component: Bookmark, // 테스트할 컴포넌트(Divider)
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };


  export const Bookmarkimg = {
    args: {
        primary:true
    },
  };