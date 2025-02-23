import React from 'react'
import { useCart } from '../Context/ProductContext'


const CartItem = ( {item }) => {
    const {addToCart, removeOne, removeItem } = useCart()

    const addOneToCart = () => {
        addToCart(item.product)
    }

    const removeOneFromCart = () => {
        removeOne(item.product.id)
    }

    const deleteItem = () => {
        removeItem(item.product.id)
    }
  return (
    <div className='cart-item'>
        <img className='cart-image' src = {item.product.images[0]} alt=''/>

        <div className='cart-info'>
            <div className ='cart-detail'>
                <p className='item-name'>{item.product.name}</p>
                <p className='item-quantity'> {item.quantity} x {item.product.price}</p>
            </div>
            <div className='cart-buttons'>
                <div className="control-btn">
                    <button className='plus-button' onClick={addOneToCart}>+</button>
                    <p className='item-quantity quantity'> {item.quantity}</p>
                    <button className='minus-button' onClick={removeOneFromCart}>-</button>
                </div>
                <div className="delete-btn">
                  <button className='trash-icon' onClick={deleteItem}><svg className='trash-btn' xmlns="http://www.w3.org/2000/svg" height='25px' width='25px'viewBox="0 0 448 512"><path d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 408c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"/></svg></button>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default CartItem   