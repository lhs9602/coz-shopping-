import styled from "styled-components";

const MainContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
margin: 30px 66px;
width: 1300px;
height: 790px;
`;

const ProductText = styled.div`
width: 179px;
height: 38px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #000000;
`


const ProductWrapper = styled.div`
    width: 100%;
    height: 35%;
    margin: 36px 0px;
    display: flex;
flex-direction: row;
    gap: 24px;
    padding: 0px;
`;


export default function Main(){


    return (
    <MainContainer>
<ProductText>상품 리스트</ProductText>
<ProductWrapper></ProductWrapper>
<ProductText>북마크 리스트</ProductText>
<ProductWrapper></ProductWrapper>

    </MainContainer>
    );
}