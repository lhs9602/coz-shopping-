import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { fetchData } from './Api/callApi';
import Main from './Pages/main/Main.js';
import ProductList from './Pages/product/Product.js';
import Bookmark from './Pages/bookmark/Bookmark.js';
import Loading from './Components/Loading/Loading.js';

// 경로와 컴포넌트 매핑
const routes = [
  { name: 'Main', path: '/', component: Main },
  { name: 'productList', path: '/products/list', component: ProductList },
  { name: 'bookmark', path: '/bookmark', component: Bookmark },
];

// Router 인스턴스 생성
const router = createBrowserRouter(routes);

// 라우터 컴포넌트 생성
const Router = () => {
  const routes = createRoutesFromElements(router.getRoutes());
  return <>{routes}</>;
};

// App 컴포넌트
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchDataAndSetLoading = async () => {
    await dispatch(fetchData());
    setLoading(false);
  };
  useEffect(() => {
    
    fetchDataAndSetLoading();
  }, []);

  return (
    <>
      <Header />
  
    </>
  );
}

export default App;
