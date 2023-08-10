import React, { useEffect, useState } from 'react';
import CartItems from './CartItems';
import '../css/CartStyling.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [estimatedArrival, setEstimatedArrival] = useState('');
  const [addingMore, setAddingMore] = useState(false); // Track if user is adding more items

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartProducts);
    const cartTotal = cartProducts.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
    setTotal(cartTotal);

    let fee = 0;
    if (cartTotal < 499 && cartTotal > 0) {
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

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleOrderNow = () => {
    const totalAmount = total + serviceFee;
    const confirmationMessage = `Your order has been confirmed. Total amount: Kshs ${totalAmount}`;
    alert(confirmationMessage);
    console.log('Order confirmed');

    setCart([]);
    updateLocalStorage([]);
    setTotal(0);
    setServiceFee(0);
    setEstimatedArrival('');
  };
  
  const handleAddMore = () => {
    setAddingMore(true);
  };


  return (
    <div className='cart-container'>
    <h1 className='cart-title'>{addingMore ? 'Add More Items' : 'My Cart'}</h1>

    <div className='cart-header'>
      <div className='cart-category'>
        <h3>Category</h3>
      </div>
      <div className='cart-price'>
        <h3>Price</h3>
      </div>
      <div className='cart-quantity'>
        <h3>Quantity</h3>
      </div>
    </div>

    {cart && cart.length > 0 ? (
      cart.map((cartItem) => (
        <CartItems
          key={cartItem.id}
          item={cartItem}
          onRemove={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
        />
      ))
    ) : (
      <p className='empty-cart-message'>No items in the cart</p>
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
        </div>
        <div className='cart-price'>
          <h3>Total Amount: Kshs {total + serviceFee}</h3>
        </div>
      </div>

      {addingMore ? (
      <div className='add-more-container'>
        {/* Your add more items UI here */}
        <button className='back-to-cart-btn' onClick={() => setAddingMore(false)}>
          Back to Cart
        </button>
      </div>
    ) : (
      <div>
        <div className='estimated-arrival'>
          <label htmlFor='estimatedArrival'>Estimated Arrival Time:</label>
          <input
            type='time'
            id='estimatedArrival'
            value={estimatedArrival}
            onChange={(e) => setEstimatedArrival(e.target.value)}
          />
        </div>

        <div className='col-act'>
          <button className='add-more-btn' onClick={handleAddMore}>
            Add More Items
          </button>
          <button className='order-btn' onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default Cart;
