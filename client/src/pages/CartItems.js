import React from 'react';
import '../css/CartStyling.css';

function CartItems({ item, onRemove, onQuantityChange }) {
  return (
    <div className='cart-item'>
      <div className='cart-header'>
        <h2 className='card-title'>
          {item.name?.charAt(0).toUpperCase() + (item.name?.slice(1).toLowerCase() || '')}
        </h2>
        <div className='cart-category'>
          <p> {item.category?.charAt(0).toUpperCase() + (item.category?.slice(1).toLowerCase() || '')}</p>
        </div>
        <div className='cart-price'>
          <p>KSH {item.price}.00</p>
        </div>
        <div className='cart-quantity'>
          <button
            className={`quantity-btn quantity-decrease-btn`}
            onClick={() =>
              onQuantityChange(item.id, Math.max(item.quantity - 1, 1))
            }
          >
            -
          </button>
          <input
            type='number'
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
            className='quantity-input'
            min='1' 
          />
          <button
            className={`quantity-btn quantity-increase-btn`}
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className='cart-actions'>
          <button onClick={() => onRemove(item.id)} className='rmv-btn'>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
