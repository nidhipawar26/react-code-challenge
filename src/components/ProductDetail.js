import React from "react";
import { useParams } from "react-router-dom";
import '../assests/ProductDetail.css'

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="product-detail">
        <div className="title">Product Detail Page</div>
        <div className="productdetail-card">
          <div className="productdetail-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="productdetail-content">
          <div className="productdetail-title">{product.title}</div>
          <div className="productdetail-desc">{product.description}</div>
          <div className="productdetail-price">$ {product.price}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
