import ProductTab from "Components/ProductTab/ProductTab.js";
import React, {useState} from "react";


function Tabs(primary) {
const [selectedTab,setSelectedTab]=useState(primary);

    return (
<>
<ProductTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
</>
)
}

export default {
    title: 'composed/Filtertap', // 스토리 분류 및 컴포넌트 이름
    component: Tabs, // 테스트할 컴포넌트
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
    argTypes: {
        primary:{control:{type:'radio'},options:["All","Product","Category","Brand","Exhibition"]}
    }
  };


 export const Filtertap={
    args: {
        primary:"All"
    },

 }

