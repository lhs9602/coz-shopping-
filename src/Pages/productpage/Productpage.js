import styled from "styled-components";
// import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
// import generateRandomNum from 'Hooks/generaterandomNum/generateRandomNum';
// import {useEffect, useState} from 'react'
// import {useSelector} from 'react-redux';
import ProductTab from "Components/ProductTab/ProductTab";

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center;
  padding: 0px;
  overflow: auto;
  gap: 12px;
  margin: 30px 86px;
  width: 1300px;
  height: 790px;
`;

const ProductWrapper = styled.div `
  width: 100%;
  height: 80%;
  margin: 36px 0px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 0px;
`;

export default function Productpage(){

  return (
<MainContainer>
    <ProductTab></ProductTab>
    <ProductWrapper></ProductWrapper>
</MainContainer>
  );      
}