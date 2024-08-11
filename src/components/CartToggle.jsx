
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartToggle = ({ toggleCart }) => {
  return (
    <button className="cart-toggle" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  );
};

export default CartToggle;
