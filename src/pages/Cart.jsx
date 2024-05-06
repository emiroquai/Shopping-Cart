import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css"
import { useState, useEffect } from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const handleDeleteProduct = (product) => {
    let newCart = [...cart];
    const index = newCart.findIndex(cartItem => cartItem.id === product.id);
    newCart.splice(index, 1);
    setCart(newCart);
  }

  useEffect(() => {
    const updateSubtotal = () => {
      let newSubtotal = 0;
      cart.forEach(product => {
        let price = product.price * product.quantity;
        newSubtotal += price;
      });
      setSubtotal(newSubtotal);
      setTotal(newSubtotal + 5);
    }
    updateSubtotal();
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div className="cartPage">
          <div className="cart">
            <ul>
              <h3>Your Cart</h3>
              {cart.map(product => (
                <li className={"cartItem"} key={product.id}>
                  <img className="cartImg" src={product.image} alt={product.title} />
                  <div className="cartItemInfo">
                    <div>
                      <h4>{product.title}</h4>
                      <p>${product.price}</p>
                    </div>
                    <p>Qty: {product.quantity}</p>
                  </div>
                  <button 
                    className="delete" 
                    onClick={() => { handleDeleteProduct(product) }}>
                    <Icon path={mdiDelete} size={1.25} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="summary">
              <h3>Summary</h3>
              <div className="subtotal">
                <h4>Subtotal</h4>
                <p>${subtotal}</p>
              </div>
              <div className="shipping">
                <h4>Shipping</h4>
                <p>$5</p>
              </div>
              <div className="total">
                <h4>Total</h4>
                <p>${total}</p>
              </div>
              <button className="checkoutBtn">Check Out</button>
            </div>

          </div>
        </div>

      )}
    </>
  )
}

export default Cart;