import AllImge from "Components/Common/ProductTabItem/All.png";
import styled from "styled-components";
import React, { useState } from "react";


const ProductWrapper = styled.div`
border-radius: 100%;  
box-sizing: border-box;
width: 82px;
height: 82px;
background: #D9D9D9;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;
`;


const TabContent= styled.div`
display: flex;
justify-content: center;
width:100%;
height: 19px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
&.submenu {
    cursor: pointer;
  }

&.focused {
    font-weight: 700;
    color: #412DD4;
    text-decoration: underline;
    }
`

function Filtertap({label,primary}){
    const [selected, setSelected] = useState(primary);

    
    return(
        <ProductWrapper onClick={()=>{setSelected(!selected)}}>
        <img src={AllImge} alt={label}/>
        <TabContent className={selected? "submenu" : "focused"} >{label}</TabContent>
        </ProductWrapper>
    )
}



export default {
    title: 'atoms/Filtertapitem', // 스토리 분류 및 컴포넌트 이름
    component: Filtertap, // 테스트할 컴포넌트
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };


  export const Tap = {
    args: {
        primary:true,
        label:"전체"
    },
  };
