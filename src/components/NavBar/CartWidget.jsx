import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div>
            <p className="text-gray-500 hover:text-black cursor-pointer flex items-center gap-1"><FaShoppingCart /> 0</p>
        </div>
    )
}

export default CartWidget