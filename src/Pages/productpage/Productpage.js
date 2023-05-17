import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
import ProductTab from "Components/ProductTab/ProductTab";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px;
  
  gap: 12px;
  margin: 30px 86px;
  width: 1300px;
  height: 790px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin: 36px 0px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 0px;
  flex-wrap:wrap;

`;

export default function ProductPage() {
  const [selectedTab, setSelectedTab] = useState("All");
   // 상품 데이터 가져오기
const products = useSelector((state) => state.data);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    // 초기 상품 데이터 설정
    if(Array.isArray(products)){
    setDisplayedProducts(products.slice(0, 20));
    }
  }, [products]);

  const fetchMoreData = () => {
    const currentLength = displayedProducts.length;
    const newData = products.slice(currentLength, currentLength + 20);
    setDisplayedProducts((prevData) => [...prevData, ...newData]);
  };

  return (
    <MainContainer>
      <ProductTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}></ProductTab>
      <ProductWrapper>
        { displayedProducts.map((product) => (
          <ItemFilter key={product.id} items={product} bookmark={product.bookmark}/>
        ))}
      </ProductWrapper>
      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        hasMore={displayedProducts.length < 100} 
        loader={<h4>Loading...</h4>}
      />
    </MainContainer>
  );
}
