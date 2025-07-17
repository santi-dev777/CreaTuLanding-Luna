import { CartContext } from "../context/CartContext"
import { useState } from "react"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, count) => {
        setCart([...cart, {item, quantity: count}])
    }

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
    }
    return (
        <CartContext.Provider 
            value={{cart, setCart, addToCart, getQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}
