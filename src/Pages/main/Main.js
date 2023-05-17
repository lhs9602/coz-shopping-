import styled from "styled-components";
import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
import generateRandomNum from 'Hooks/generaterandomNum/generateRandomNum';
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center;
  padding: 0px;

  gap: 12px;
  margin: 30px 86px;
  width: 1300px;
  height: 790px;
`;

const ProductText = styled.div `
  width: 179px;
  height: 38px;
  margin-top: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const ProductWrapper = styled.div `
  width: 100%;
  height: 35%;
  margin: 36px 0px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 0px;
`;

export default function Main() {
    const [items, setItems] = useState([]);
    const [bookmarkItems, setBookmarkItems] = useState([]);

    const data = useSelector(state => state.data);
    
  useEffect(() => {
    
    const randomNumbers = generateRandomNum(4); // 0부터 100까지 중복 없이 랜덤한 4개의 숫자 생성
    const matchedItems = randomNumbers.map((number) => {
      return data[number]; // data 배열에서 해당 인덱스의 요소 가져오기
    });
    setItems(matchedItems); // 매칭된 요소들을 상태로 설정
    const filtered = data.filter((el) => el.bookmark === true);
    setBookmarkItems(filtered.slice(0, 4));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <MainContainer>
            <ProductText>상품 리스트</ProductText>
            <ProductWrapper>
                {
                    Array.isArray(items) && items.map((el) => {
                        return <ItemFilter key={el.id} items={el} bookmark={el.bookmark}/>;
                    })
                }
            </ProductWrapper>
            <ProductText>북마크 리스트</ProductText>
            <ProductWrapper>
              {
                    Array.isArray(bookmarkItems) && bookmarkItems.map((el) => {
                        return <ItemFilter key={el.id} items={el} bookmark={el.bookmark}/>;
                    })
                }
                </ProductWrapper>
        </MainContainer>
    );
}