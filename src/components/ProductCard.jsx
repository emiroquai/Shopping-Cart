import "../styles/ProductCard.css"
import { useState } from "react";
import PropTypes from 'prop-types';

const ProductCard = ({ 
  title, 
  price, 
  category, 
  image, }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleAddToCart = () => {
      // Add logic to add the product to the cart
      console.log(`Added ${quantity} ${title} to cart`);
    };
  
    return (
      <div className="productCard">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{category}</p>
        <h4 className="price">${price}</h4>
        <div className="cardBottom">
          <div className="quantityControl">
            <button className="quantityBtn" onClick={handleDecreaseQuantity}>-</button>
            <input className="quantity" type="text" value={quantity} readOnly />
            <button className="quantityBtn" onClick={handleIncreaseQuantity}>+</button>
          </div>
          <button className="addToCartBtn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  };

  ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default ProductCard;