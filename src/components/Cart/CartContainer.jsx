import Cart from "./Cart"
import { useCart } from "../../context/useCart"
import OrderSummary from "./OrderSummary"
import { useNavigate } from "react-router"

function CartContainer() {
  const { cart } = useCart()
  const navigate = useNavigate()

  if(cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] flex-col">
        <p className="text-2xl font-semibold text-gray-600">Your cart is empty</p>
        <button className="mt-4 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white w-full py-2 rounded max-w-[200px] self-center"
        onClick={() => navigate('/')}>View Products</button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-8">

      <div className="col-span-2">
        <h2 className="text-2xl font-semibold mb-4 text-gray-600">Shopping Cart</h2>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] text-gray-500 mb-2 font-medium border-b pb-2">
          <p className="pl-2">Product</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Total</p>
        </div>

        <div className="flex flex-col gap-4 ">
          {cart.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
      </div>

      <OrderSummary />
    </div>
  )
}

export default CartContainer
