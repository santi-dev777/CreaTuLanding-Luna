import { useCart } from "../../context/useCart"
import { useNavigate } from "react-router"

function OrderSummary() {
    const { getTotal, getQuantity } = useCart()
    const navigate = useNavigate()
    return (
        <div className="col-span-1 text-gray-600 mt-10">
            <div className="bg-gray-100 p-6 rounded shadow-md h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Items ({getQuantity()})</span>
                    <span>${getTotal()}</span>
                </div>
                <div className="flex justify-between mb-2 ">
                    <span>Shipping</span>
                    <span>$5.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total Cost</span>
                    <span>${getTotal() + 5}</span>
                </div>
                <button onClick={() => navigate('/checkout')} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded cursor-pointer">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default OrderSummary