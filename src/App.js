import React, { useEffect,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { fetchData } from './Api/callApi';
import Main from './Pages/main/Main.js';
import ProductList from './Pages/product/Product.js';
import Bookmark from './Pages/bookmark/Bookmark.js';

function App() {
  const dispatch = useDispatch();

  const fetchDataAndSetLoading = useCallback(async () => {
    await dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    fetchDataAndSetLoading();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
