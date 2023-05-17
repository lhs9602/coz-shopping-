import styled from "styled-components";

const FooterContainer=styled.div`

box-sizing: border-box;
position: fixed;
bottom: 0;
width: 100%;
height: 60px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TermsOfRight=styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;
/* or 11px */



color: #888888;
`;


export default function Footer() {

    return (
    <FooterContainer>
    <TermsOfRight>개인정보 처리방침 | 이용 약관</TermsOfRight>
    <TermsOfRight>All rights reserved @ Codestates</TermsOfRight>
    </FooterContainer>)
}