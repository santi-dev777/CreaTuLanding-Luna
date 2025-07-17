import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/useCart";
import { useNavigate } from "react-router";

function CartWidget() {
    const {getQuantity} = useCart()
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/cart')} className="text-gray-500 hover:text-black cursor-pointer flex items-center gap-1">
                <FaShoppingCart /> 
                {getQuantity()}
            </button>
        </div>
    )
}

export default CartWidget