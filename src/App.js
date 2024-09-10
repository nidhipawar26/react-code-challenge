
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/json/productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products...", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );



}

export default App;
