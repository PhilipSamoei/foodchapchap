import React, { useEffect, useState } from 'react';
import CartItems from './CartItems';
import '../css/CartStyling.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartProducts);
    const cartTotal = cartProducts.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
    setTotal(cartTotal);

    let fee = 0;
    if (cartTotal < 499) {
      fee = 30;
    } else if (cartTotal >= 500 && cartTotal < 1000) {
      fee = 50;
    } else if (cartTotal >= 1000 && cartTotal < 1500) {
      fee = 100;
    } else if (cartTotal >= 1500 && cartTotal < 2000) {
      fee = 150;
    } else if (cartTotal >= 2000) {
      fee = 200;
    }
    setServiceFee(fee);
  }, [cart]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleOrderNow = () => {
    const totalAmount = total + serviceFee;

    // Simulate order confirmation and notification
    const confirmationMessage = `Your order has been confirmed. Total amount: Kshs ${totalAmount}`;
    alert(confirmationMessage);
    console.log('Order confirmed');

    // Clear the cart and update local storage after placing the order
    setCart([]);
    updateLocalStorage([]);
    setTotal(0);
    setServiceFee(0);
  };

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
          <CartItems key={cartItem.id} item={cartItem} onRemove={handleRemoveItem} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}

      <div className='cart-total'>
        <div className='cart-category'>
          <h3>Gross Price</h3>
        </div>
        <div className='cart-price'>
          <h3>Kshs {total}</h3>
        </div>
        <div className='cart-price'>
          <h3>Service Fee: Kshs {serviceFee}</h3>
          {/* <h3>{totalAmount}</h3> */}
        </div>
        <div>Kshs  </div>
        <div className='col-act'>
          <button className='order-btn' onClick={handleOrderNow}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
