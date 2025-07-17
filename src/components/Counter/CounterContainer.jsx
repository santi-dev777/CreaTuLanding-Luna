import {useState} from "react"
import Counter from "./Counter"
import { useCart } from "../../context/useCart"

function CounterContainer ({product}) {
    const [count, setCount] = useState(0)
    const {addToCart} = useCart()

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <Counter 
            count={count} 
            handleAdd={handleAdd} 
            handleSubtract={handleSubtract} 
            addToCart={addToCart} 
            product={product} 
        />
    )
}

export default CounterContainer