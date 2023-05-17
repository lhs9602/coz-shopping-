import styled from "styled-components"
import Logo from "../Common/logo/Logo.js"
import Menu from "../Common/menu/Menu.js";

const HeaderBar = styled.div`
   width: 100%;
height: 80px;

background: #FFFFFF;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

position: sticky;
flex: none;
order: 0;
flex-grow: 0;
`;

const Titles = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 88.02%;
/* or 28px */

display: flex;
align-items: center;
white-space: nowrap;

color: #000000;
position: absolute;
left: 11.17%;
right: 70.86%;
top: 31.48%;
bottom: 31.48%;
`;


export default function Header(){


    return (
        <HeaderBar>
            <Logo />
            <Titles>COZ Shopping</Titles>
            <Menu/>

        </HeaderBar>
    )
}