// import React from 'react';
// import '../css/CartStyling.css'

// function Checkout({ cart, total }) {
//   return (
//     <div className='container'>
//       <div className='checkout-row-container'>
//         <h2>Your order</h2>
//         <div className='checkout-row'>
//           <div className='cart-category'>
//             <h2>Category</h2>
//           </div>
//           <div className='cart-price'>
//             <h2>Price (Kshs)</h2>
//           </div>
//         </div>

//         {cart && cart.length > 0 ? (
//           cart.map((item) => (
//             <div className='checkout-row' key={item.id}>
//               <div className='cart-category'>{item.category}</div>
//               <div className='cart-price'>{item.price}</div>
//             </div>
//           ))
//         ) : (
//           <p>No items in the cart</p>
//         )}

//          <div className='checkout-row'>
//           <div className='cart-category'>
//             <h3>Total</h3>
//           </div>
//           <div className='cart-price'>
//             <h3>Kshs {total}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
