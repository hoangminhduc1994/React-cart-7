
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';


const Cart = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={`cart ${isOpen ? 'cart-open' : 'cart-closed'}`}>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-info">
              <h3 className="cart-title">{item.title}</h3>
              <p className="cart-price">${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
