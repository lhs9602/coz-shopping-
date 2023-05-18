import {MainContainer, ProductText, ProductWrapper} from "./MainStyles.css";
import ItemFilter from 'Components/ItemList/itemFilter/ItemFilter';
import generateRandomNum from 'func/generaterandomNum/generateRandomNum';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Footer from 'Components/Footer/Footer.js';

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
        <> < MainContainer > <ProductText>상품 리스트</ProductText>
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
    <Footer/>
</>
    );
}
