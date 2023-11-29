import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/1/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      weight: "500g",
      description:
        "Praesent volutpat massa nec risus pulvinar, ac maximus justo elementum.",
      image: "https://picsum.photos/id/2/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/3/200",
    },
    {
      id: 4,
      name: "Product 4",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/4/200",
    },

    {
      id: 5,
      name: "Product 5",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/5/200",
    },
    {
      id: 6,
      name: "Product 6",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/6/200",
    },
    {
      id: 7,
      name: "Product 7",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/7/200",
    },
    {
      id: 8,
      name: "Product 8",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/8/200",
    },
    {
      id: 9,
      name: "Product 9",
      price: 10.99,
      weight: "250g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/9/200",
    },
  ]);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const renderProductCards = () => {
    let sortedProducts = [...products];

    if (sortOption === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id}>
        <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h5>{product.name}</h5>
          <p>Price: ${product.price}</p>
          <p>Weight: {product.weight}</p>
          
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div className="header-container">
        <h4 className="title">Our Products</h4>
        <div className="sort-by-container">
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">{renderProductCards()}</div>
    </>
  );
};
export default ProductList;