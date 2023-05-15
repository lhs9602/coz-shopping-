import { useSelector } from 'react-redux';

const useRandomItems = () => {
  const data = useSelector(state => state.data);

  // type값이 각각 Product, Category, Brand, Exhibition인 요소를 1개씩만 선택합니다.
  const products = data.filter(item => item.type === 'Product').slice(0, 1);
  const categories = data.filter(item => item.type === 'Category').slice(0, 1);
  const brands = data.filter(item => item.type === 'Brand').slice(0, 1);
  const exhibitions = data.filter(item => item.type === 'Exhibition').slice(0, 1);

  // 필요한 데이터와 로딩 상태를 반환합니다.
  return {
    products,
    categories,
    brands,
    exhibitions,
    
  };
};

export default useRandomItems;
