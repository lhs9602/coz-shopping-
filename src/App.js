import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router5';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { fetchData } from '@/Api/callApi';
import Main from '@/Pages/main';
import ProductList from '@/Pages/product';
import Bookmark from '@/pages/Bookmark';
import Loading from '@/Components/Loading';

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

  useEffect(() => {
    const fetchDataAndSetLoading = async () => {
      await dispatch(fetchData());
      setLoading(false);
    };

    fetchDataAndSetLoading();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <RouterProvider router={router}>
          <Router />
        </RouterProvider>
      )}
      <Footer />
    </>
  );
}

export default App;
