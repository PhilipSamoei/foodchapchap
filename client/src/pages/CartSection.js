import React, { useEffect, useState } from 'react';
import CartItems from './CartItems';
import '../css/CartStyling.css';

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
    );
  }, [cart]);

  return (
    <div className='cart-container'>
      <h1>My Cart</h1>

      <div className='cart-header'>
        <div className='cart-category'>
          <h3>Category</h3>
        </div>
        <div className='cart-price'>
          <h3>Price</h3>
        </div>
      </div>

      {cart && cart.length > 0 ? (
        cart.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} setCart={setCart} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}

      <div className='cart-total'>
        <div className='cart-category'>
          <h3>Total</h3>
        </div>
        <div className='cart-price'>
          <h3>Kshs {total}</h3>
        </div>
        <div className='col-act'>
          <button className='order-btn'>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
