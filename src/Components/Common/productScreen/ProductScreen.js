import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductContainer, ProductWrapper } from "./ProductScreenStyles.css";
import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
import ProductTab from "Components/ProductTab/ProductTab";
import Footer from "Components/Footer/Footer";
import Loading from 'Components/Loading/Loading.js';
import {fetchFilteredData } from "func/filterProducts/filterProducts.js";

export default function ProductScreen({ products }) {
  
  const [selectedTab, setSelectedTab] = useState("All");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setDisplayedProducts(fetchFilteredData(products, selectedTab, 0, 20));
  }, [selectedTab, products]);

  const fetchMoreData = () => {
    const currentLength = displayedProducts.length;
    const newData = fetchFilteredData(products, selectedTab, currentLength, currentLength + 20);

    setDisplayedProducts((prevData) => [...prevData, ...newData]);

    if (currentLength + 20 >= newData.length) {
      setHasMore(false);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setDisplayedProducts([]);
    setHasMore(true);
  };

  return (
    <>
      <ProductContainer>
        <ProductTab selectedTab={selectedTab} setSelectedTab={handleTabChange} />
        <ProductWrapper>
          {displayedProducts.map((product) => (
            <ItemFilter key={product.id} items={product} bookmark={product.bookmark} />
          ))}
        </ProductWrapper>
        {hasMore ? (
          <InfiniteScroll
            dataLength={displayedProducts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loading />}
            style={{ overflow: "hidden" }}
          />
        ) : (
          <Footer />
        )}
      </ProductContainer>
    </>
  );
}
