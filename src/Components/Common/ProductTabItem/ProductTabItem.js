import styled from "styled-components";
import AllImge from "./All.png";
import ProductImge  from "./Product.png";
import CategoryImge  from "./Category.png";
import BrandImge  from "./Brand.png";
import ExhibitionImge  from "./Exhibition.png";


const ProductWrapper = styled.div `
border-radius: 100%;  
box-sizing: border-box;
width: 82px;
height: 82px;
background: #D9D9D9;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;

`;

const TabImg = styled.img ``;

const TabContent= styled.div `
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

const ImgSelector = (name)=>{
    if(name==="All"){
        return AllImge;
    }
    else if(name==="Product"){
        return ProductImge;
    }
    else if(name==="Category"){
        return CategoryImge;
    }
    else if(name==="Brand"){
        return BrandImge;
    }
    else if(name==="Exhibition"){
        return ExhibitionImge;
    }
}

export default function ProductTabItem({name,content,handleTabClick,selectedTab}){
    
    

    return(
        <ProductWrapper onClick={()=>{handleTabClick(name)}}
        >
            <TabImg src={ImgSelector(name)}/>
            <TabContent className={selectedTab !== name ? "submenu" : "focused"} 
>{content}</TabContent>
        </ProductWrapper>
    )
}