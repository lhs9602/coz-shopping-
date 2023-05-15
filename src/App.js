import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { fetchData } from 'Api/callApi';
import Main from './Pages/main/Main.js';
import ProductList from './Pages/product/Product.js';
import Bookmark from './Pages/bookmark/Bookmark.js';
import Loading from './Components/Loading/Loading.js';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      {isLoading ? (
        <Loading />
      ) : data.length > 0 ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      ) : null}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
