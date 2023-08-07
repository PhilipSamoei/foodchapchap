import React from 'react'
import '../css/CartStyling.css'

function CartItems({cart, setCart, item}) {
    function removeFromCart(){
        setCart(cart.filter(cartItem => cartItem.id !== item.id))
      }
    return (
        <div className='row'>
                <div className='category'>{item.category}</div>
                <div className='price'>{item.price }</div>
                <div className='col-act'> <button onClick={removeFromCart} className='rmv-btn'>Remove</button></div>
        </div>
      )
}

export default CartItems