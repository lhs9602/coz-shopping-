import React from "react";
import styled from "styled-components";
import ItemFilter from "./ItemFilter";

const ProductsContainer = styled.div`
  position: relative; /* 부모 요소를 relative로 설정합니다. */
  display: grid;
  grid-template-columns: repeat(
    4,
    264px
  ); /* 4개의 컬럼으로 그리드를 설정합니다. */
  grid-gap: 20px; /* 컴포넌트 간의 간격을 설정합니다. */
`;

const productsData = [
    {
      id: 1,
      image:  "image2.jpg",
      name: "제품 1",
      price: "19,900원",
      discount: "10%",
      bookmark: false
    },
    {
      id: 2,
      image: "image2.jpg",
      name: "제품 2",
      price: "29,900원",
      discount: "20%",
      bookmark: true
    }
  ];
export default function ItemList(){



return (
    <ProductsContainer>
      {productsData.map((product) => ItemFilter(product))}
    </ProductsContainer>
  );
      }