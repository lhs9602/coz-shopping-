import styled from "styled-components";

const MainContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
margin: 30px 76px;
width: 1300px;
height: 790px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
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


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
export default function Main(){


    return (
    <MainContainer>
<ProductText>상품 리스트</ProductText>

    </MainContainer>
    );
}