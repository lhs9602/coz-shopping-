import React, {useState} from "react";
import BookmarkOn from "Components/Common/Bookmark/북마크 아이콘 - on.png";
import BookmarkOff from "Components/Common/Bookmark/북마크 아이콘 - off.png";
import styled from "styled-components";
import cardimg from "./cardimg.jpg";


const ProductWrapper = styled.div `
  height: 264px;
  width: 264px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div `
  position: relative;
  height: 210px;
  width: 100%;
`;
const Image = styled.img `
  height: 100%;
  width: 100%;
`;

const TextWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ProductName = styled.div `
  color: #000;
  font-weight: bold;
  font-size: 15px;

`;

const Discount = styled.div `
  color: #452cdd;
  font-weight: bold;
  align-self: flex-end;
`;

const Price = styled.div `
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  align-self: flex-end;

`;

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

function Card({items,primary}) {
    const [CurrentBookmark,SetBookmark]=useState(primary);


    return (
        <ProductWrapper >
            <ImageWrapper>
                <Image src={items.image_url} alt={items.title} onClick={()=>{}}/> 
                <BookmarkIcon src={CurrentBookmark ? BookmarkOn:BookmarkOff} onClick={()=>{SetBookmark(!CurrentBookmark)}}/>
            </ImageWrapper>
            <TextWrapper>
                <ProductName>{items.title}</ProductName>
                <Discount>{items.discountPercentage}%</Discount>
            </TextWrapper>
            <Price>{items.price}원</Price>
        </ProductWrapper>
    );
};


export default {
    title: 'composed/Card', // 스토리 분류 및 컴포넌트 이름
    component: Card, // 테스트할 컴포넌트
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };

export const Cards= {
    args: {
        primary:true,
        items:{id:1, image_url:cardimg, title:"나만의 상품", discountPercentag:99, price:1000,},
    },
  };