import {useState} from "react"
import Counter from "./Counter"

function CounterContainer () {
    const [count, setCount] = useState(1)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <Counter count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} />
    )
}

export default CounterContainer