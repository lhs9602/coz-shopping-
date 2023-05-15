import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { fetchData } from './Api/callApi';
import Main from './Pages/main/Main.js';
import ProductList from './Pages/product/Product.js';
import Bookmark from './Pages/bookmark/Bookmark.js';
import Loading from 'Components/Loading/Loading';

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
 {loading ?<Loading/> :
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/products/list" element={<ProductList />} />
    <Route path="/bookmark" element={<Bookmark />} />
  </Routes>
  <Footer />
</BrowserRouter>
}
</>
 
  );
}

export default App;
