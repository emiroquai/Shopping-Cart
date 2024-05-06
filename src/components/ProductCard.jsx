import "../styles/ProductCard.css"
import { useState } from "react";
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useOutletContext();

    const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const handleAddToCart = (product, quantity) => {
      if (quantity > 0) {
        let newCart = [...cart];
        const index = newCart.findIndex(cartItem => cartItem.id === product.id);
        if (index !== -1) {
          newCart[index] = { ...newCart[index], quantity: quantity };
        } else {
          product.quantity = quantity;
          newCart.push(product);
        }
        setCart(newCart);  
      }
  };
  
    return (
      <div className="productCard">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <h4 className="price">${product.price}</h4>
        <div className="cardBottom">
          <div className="quantityControl">
            <button className="quantityBtn" onClick={handleDecreaseQuantity}>-</button>
            <input className="quantity" type="text" value={quantity} readOnly />
            <button className="quantityBtn" onClick={handleIncreaseQuantity}>+</button>
          </div>
          <button className="addToCartBtn" onClick={() => {handleAddToCart(product, quantity)}}>Add to Cart</button>
        </div>
      </div>
    );
  };

  ProductCard.propTypes = {
    product: PropTypes.object.isRequired
  };

export default ProductCard;