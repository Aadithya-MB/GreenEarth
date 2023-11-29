import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addToCartStatus, setAddToCartStatus] = useState("idle");

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/1/200",
        review: "Worth for money, Amazing Product",
      },
      {
        id: 2,
        name: "Product 2",
        price: 19.99,
        weight: "500g",
        description:
          "Praesent volutpat massa nec risus pulvinar, ac maximus justo elementum.",
        image: "https://picsum.photos/id/2/200",
        review: null,
      },
      {
        id: 3,
        name: "Product 3",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/3/200",
        review: null,
      },
      {
        id: 4,
        name: "Product 4",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/4/200",
        review: null,
      },

      {
        id: 5,
        name: "Product 5",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/5/200",
        review: null,
      },
      {
        id: 6,
        name: "Product 6",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/6/200",
        review: null,
      },
      {
        id: 7,
        name: "Product 7",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/7/200",
        review: null,
      },
      {
        id: 8,
        name: "Product 8",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/8/200",
        review: null,
      },
      {
        id: 9,
        name: "Product 9",
        price: 10.99,
        weight: "250g",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/id/9/200",
        review: null,
      },
    ];

    const productData = products.find((p) => p.id === parseInt(id, 10));
    setProduct(productData);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    setAddToCartStatus("adding");

    setTimeout(() => {
      setAddToCartStatus("added");
    }, 1000);
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
  };

  const calculateTotalPrice = () => {
    return product.price * quantity;
  };

  return (
    <div className="product-details-container fade-in">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Weight: {product.weight}</p>
      <p>Review: {product.review ? product.review : "Not Available"}</p>

      <div className="quantity-container">
        <label htmlFor="quantity">Quantity:</label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          {/* Add more options if needed */}
        </select>
      </div>
      <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
      <button
        className={`add-to-cart-button ${
          addToCartStatus === "adding" ? "adding" : ""
        }`}
        onClick={handleAddToCart}
        disabled={addToCartStatus !== "idle"}
      >
        {addToCartStatus === "adding" ? "Adding..." : "Add to Cart"}
      </button>

      <Link to="/cart" className="go-to-cart-link">
        Go to Cart
      </Link>
    </div>
  );
};

export default ProductDetails;
