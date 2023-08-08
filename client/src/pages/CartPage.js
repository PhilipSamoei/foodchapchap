import React, { useState } from 'react';
import Cart from './CartSection';

function CartPage() {
  const [cart, setCart] = useState([]); 

  const addToCart = (dish) => {
    setCart([...cart,dish]);
  }

  return (
    <div>
      <Cart cart={cart} setCart={setCart} addToCart={addToCart}/>
    </div>
  );
}

export default CartPage;
