import React from 'react';
import '../css/CartStyling.css';

function CartItems({ item, onRemove }) {
  return (
    <div className='cart-item'>
      <div className='cart-header'>
        <h2 className='card-title'>
          {item.restaurant?.name?.charAt(0).toUpperCase() +
            (item.restaurant?.name?.slice(1).toLowerCase() || '')} -{' '}
          {item.name?.charAt(0).toUpperCase() + (item.name?.slice(1).toLowerCase() || '')}
        </h2>
        <div className='cart-category'>
          <p>Category: {item.category?.charAt(0).toUpperCase() + (item.category?.slice(1).toLowerCase() || '')}</p>
        </div>
        <div className='cart-price'>
          <p>Price: {item.price}</p>
        </div>
        <div className='cart-actions'>
          <button onClick={() => onRemove(item.id)} className='rmv-btn'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
