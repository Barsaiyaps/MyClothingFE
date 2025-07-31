import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    id: 1,
    title: "Classic Cotton T-Shirt",
    price: 799,
    description:
      "A high-quality cotton t-shirt that's perfect for everyday wear. Breathable, durable, and comfortable.",
    image: "https://www.bringitonline.in/uploads/2/2/4/5/22456530/dsc07100_orig.jpg", // Place your product image in /public/images/
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <div className="product-detail">                    
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="product-price">₹{product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-sizes">
          <label>Select Size:</label>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${
                  selectedSize === size ? "active" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
