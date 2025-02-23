import React from 'react'
import { createContext, useState, useContext } from 'react';
  
export const ProductContext = createContext();

export const useCart = () => {

    const context = useContext(ProductContext)
    if(!context) throw new Error('useCart can not be used outside of an ProductContextProvider')
        return context
}

   const getTotalPrice = (cart) => {
    let total = 0
    cart.forEach(item => {
        total += item.product.price * item.quantity
    })
     return total
   }

   const getTotalQuantity = (cart) => {
     let total = 0
     cart.forEach(item => {
        total += item.quantity
     })
     return total
   }
   

 const ProductContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const totalQuantity = getTotalQuantity(cart)
    const totalPrice = getTotalPrice(cart)

    const addToCart = (product) => {
        const item = cart.find((cartItem) => cartItem.product.id === product.id )
       
        let newCart = [...cart]

        item
        ? item.quantity ++ 
        : newCart.push({ product, quantity: 1})

        setCart(newCart)

    }
    const removeOne = (productId) => {
        const item = cart.find (cartItem => cartItem.product.id === productId)

        let newCart = [...cart]

        item.quantity <= 1
        ? newCart = newCart.filter(item => item.product.id !== productId)
        : item.quantity --
         
        setCart(newCart)
    }
    const removeItem = (productId) => {
        setCart(state => state.filter(item => item.product.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    const value = {
        cart,
        totalPrice,
        totalQuantity,
        addToCart,
        removeOne,
        removeItem,
        clearCart

    }


  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider