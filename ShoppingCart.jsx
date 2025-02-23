import React, { useEffect } from 'react'
import { useCart } from '../Context/ProductContext'
import { Link, useNavigate } from 'react-router'
import CartItem from './CartItem'
import { useAuth } from '../Context/authcontext'


const ShoppingCart = ({setIsDropdownOpen, isCartPage}) => {

    const {cart, totalPrice, clearCart} = useCart()
    const {token } = useAuth ()
    const navigate = useNavigate()


    
    const placeOrder = async () => {    

      try{

        const orderItems =  cart.map(item => ({
          productId: item._id,
          quantity: item.quantity
        }))
      

        const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/orders', {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include token here
          },
          body: JSON.stringify({products: orderItems }),
        });

        const data = await res.json()
        console.log(data)
      

        if (res.ok) {
          navigate('/order-history') // Go to order history page if users logged in sucessfully
        }

      }catch (error){
        console.log(error)

      }
    }


  return (
     <div>
            <div className='shopping-content'>
              {
                cart.length <= 0 && (
                    <div className='cart-empty'>
                        <p className='empty-text'>your cart is empty</p> 
                    </div>
                )
               }
               {
                cart.map(item => (
                    <CartItem key={'cart_' + item.product._id} item={item}/>
                ))
               }
               <div className='price'>
                 <p className='total-price'>Total: {totalPrice}</p>
               </div>
              <div className='checkout'>
               {
                isCartPage
                ? < button  className='check-link' onClick={placeOrder}>Place Order</button>
                : <Link className='checkout-btn' onClick={() => setIsDropdownOpen(false)}to="/cart">Checkout </Link>
               }
              </div>
            </div>
            
        </div>
  )
}

export default ShoppingCart