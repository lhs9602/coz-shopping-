import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { fetchData } from 'Api/callApi';
import Main from './Pages/main/Main.js';
import ProductListpage from './Pages/productpage/Productpage.js';
import Bookmarkpage from './Pages/bookmarkpage/Bookmarkpage.js';
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
          <Route path="/products/list" element={<ProductListpage />} />
          <Route path="/bookmark" element={<Bookmarkpage />} />
        </Routes>
      ) : null}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
