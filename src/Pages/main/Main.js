import styled from "styled-components";
import Product from "Components/ItemList/Items/Product";
import Brand from "Components/ItemList/Items/Brand";
import Category from "Components/ItemList/Items/Category";
import Exhibition from "Components/ItemList/Items/Exhibition";
import useRandomItems from 'Hooks/useRandomItems/useRandomItems';

const MainContainer = styled.div`
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
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 35%;
  margin: 36px 0px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 0px;
`;

export default function Main() {
  const { products, categories, brands, exhibitions } = useRandomItems();

 

  return (
    <MainContainer>
      <ProductText>상품 리스트</ProductText>
      <ProductWrapper>
        <Product items={products[0]} />
        <Exhibition items={exhibitions[0]} />
        <Category items={categories[0]} />
        <Brand items={brands[0]} />
      </ProductWrapper>
      <ProductText>북마크 리스트</ProductText>
      <ProductWrapper>{/* 북마크 컴포넌트 추가 */}</ProductWrapper>
    </MainContainer>
  );
}
