import styled from "styled-components"
import Icon from "./아이콘.jpg"
import MenuList from "Components/Common/menuList/MenuList.js";
import useRedirect from 'Hooks/useRedirect/useRedirect.js';
import { useState } from "react";

const MenuIcon=styled.div`
background-image:url(${Icon});;
position: absolute;
height: 24px;
width: 30px;
display: flex;
justify-content:end;
left: 91.5%;
right: 5.94%;
top: 31.25%;
bottom: 31.25%;
&:hover{
cursor: pointer;
}

`;

export default function Menu(){
    const redirect = useRedirect();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (url) => {
    redirect(url);
  };

  const handleMenuHover = () => {
    setMenuOpen(true);
   
  };
  const handleMenuHoverLeave = () => {
    setTimeout(() => {
        setMenuOpen(false);
      }, 5000);

  }

    return (
        <MenuIcon onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHoverLeave }>
            <MenuList handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
        </MenuIcon>
    );
}