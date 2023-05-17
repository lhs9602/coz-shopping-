import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
import ProductTab from "Components/ProductTab/ProductTab";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px;
  gap: 12px;
  margin: 70px 86px;
  width: 1300px;
  height: 790px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 70%;
  margin: 36px 0px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 0px;
  flex-wrap:wrap;
`;

export default function ProductPage() {
  const [selectedTab, setSelectedTab] = useState("All");
  const products = useSelector((state) => state.data);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
     // 선택된 탭에 맞게 데이터 필터링
    const filteredData = products.filter((product) => {
      if (selectedTab === "All") {
        return true;
      } else if (product.type === selectedTab) {
        return true;
      }
      return false;
    });

    // 필터링된 데이터의 처음 20개를 초기 데이터로 설정
    setDisplayedProducts(filteredData.slice(0, 20));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const fetchMoreData = () => {
    const currentLength = displayedProducts.length;  
    
    
    // 선택된 탭에 맞게 데이터 필터링
    const filteredData = products.filter((product) => {
      if (selectedTab === "All") {
        return true;
      } else if (product.type === selectedTab) {
        return true;
      }
      return false;
    });


    // 다음 20개의 데이터 가져오기
    const newData = filteredData.slice(currentLength, currentLength + 20);
    
    // 기존 데이터와 새로운 데이터를 합치기
    setDisplayedProducts((prevData) => [...prevData, ...newData]);

    // 모든 데이터를 가져왔을 경우 실행
    if (currentLength + 20 >= filteredData.length) {
      setHasMore(false);
    }
  };

  const handleTabChange = (tab) => {
        // 탭 변경 시 선택된 탭과 데이터 초기화

    setSelectedTab(tab);
    setDisplayedProducts([]);
    setHasMore(true);
  };

  return (
    <ProductContainer>
      <ProductTab selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      <ProductWrapper>
        {displayedProducts.map((product) => (
          <ItemFilter key={product.id} items={product} bookmark={product.bookmark} />
        ))}
      </ProductWrapper>
      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{ overflow: "hidden" }}
      />
    </ProductContainer>
  );
}
