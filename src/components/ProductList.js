import React from "react";
import "./../assests/ProductList.css";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("/json/productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products...", error));
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };


  return (
    <div className="container">
      <div className="product-list">
        <div className="title">Product List Page</div>
        <div className="categories">
          {categories?.map((category) => (
            <button
              className="category"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="products-cards row">
          {filteredProducts?.map((product) => (
             <Link to={`/product/${product.id}`} className="product-card col-12 col-md-6 col-lg-3">
            <div key={product.id} >              
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-title">{product.title}</div>
              <div className="product-desc">{product.description}</div>
              <div className="product-aval">Availability : {product.availability}</div>
              <div className="product-price">$ {product.price}</div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  }


export default ProductList;
