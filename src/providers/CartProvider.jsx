import { CartContext } from "../context/CartContext"
import { useState } from "react"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, count) => {
        setCart(prevCart =>{
            const existingItem = prevCart.find(product => product.item.id === item.id)
            if(existingItem){
                return prevCart.map(product =>
                    product.item.id === item.id
                    ? {...product, quantity: product.quantity + count}
                    : product
                )
            }
            else{
                return [...prevCart, {item, quantity: count}]
            }
        })
    }

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
    }

    const updateQuantity = (itemId, newQuantity) => {
        setCart(prevCart =>
          prevCart.map(cartItem =>
            cartItem.item.id === itemId
              ? { ...cartItem, quantity: Math.max(1, newQuantity) }
              : cartItem
          )
        )
    }

    const removeItem = (itemId) => {
        setCart(prevCart =>
          prevCart.filter(cartItem => cartItem.item.id !== itemId)
        )
        
    }

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider 
            value={
                {cart, 
                setCart, 
                addToCart, 
                getQuantity, 
                getTotal, 
                updateQuantity, 
                removeItem, 
                clearCart}
            }>
            {children}
        </CartContext.Provider>
    )
}
