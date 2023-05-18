import styled from "styled-components";


export const ProductWrapper = styled.div `
border-radius: 100%;  
box-sizing: border-box;
width: 82px;
height: 82px;
background: #D9D9D9;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;

`;


export const TabContent= styled.div `
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