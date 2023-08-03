import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, setCart, setCartCheckout, setCartTotal }) {
  let navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce(
        (sum, cartItem) => sum + cartItem.amount * cartItem.quantity,
        0
      );
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart]);

  function checkOut() {
    setCartCheckout(cart);
    setCartTotal(total);
    setCart([]);
    navigate('/checkout');
  }

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="row">
        <div className="description">
          <h2>Description</h2>
        </div>
        <div className="price">
          <h2>Amount (Kshs)</h2>
        </div>
        <div className="col-act"></div>
      </div>

      {cart.map((cartItem) => (<CartItem 
          key={cartItem.id} 
          item={cartItem}
          cart={cart}
          setCart={setCart}
        />
      ))}

      <div className="row">
        <div className="description">
          <h3>Total</h3>
        </div>
        <div className="price">
          <h3>Kshs {total}</h3>
        </div>
        <div className="col-act">
          <button className="checkout-btn" onClick={checkOut}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
