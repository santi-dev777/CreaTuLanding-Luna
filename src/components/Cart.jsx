import {useCart} from "../context/useCart"
import {toast} from "react-hot-toast"

function Cart({ item }) {
    const {updateQuantity, removeItem} = useCart()

    const handleAdd = () => {
      updateQuantity(item.item.id, item.quantity + 1)
    }
    const handleSubtract = () => {
      if(item.quantity > 1){
        updateQuantity(item.item.id, item.quantity - 1)
      }
    }

    const handleRemove = () => {
      removeItem(item.item.id)
      toast.success(`${item.item.name} removed from cart`)
    }
    return (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b pb-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={item.item.image}
            alt={item.item.title}
            className="w-16 h-16 object-contain"
          />
          <div>
            <p className="text-white font-semibold">{item.item.name}</p>
            <button
              onClick={handleRemove}
              className="text-red-500 text-sm hover:underline cursor-pointer">
              Remove
            </button>
          </div>
        </div>
        <p className="text-center text-white">${item.item.price}</p>
        <div className="flex items-center justify-center gap-2">
        <button 
          onClick={handleSubtract}
          className="bg-blue-900 px-2 py-1 rounded hover:bg-blue-400 text-white disabled:opacity-50 cursor-pointer"
          disabled={item.quantity <= 1}
        >-</button>
        <span className="text-white">{item.quantity}</span>
        <button 
          onClick={handleAdd}
          className="bg-blue-900 px-2 py-1 rounded hover:bg-blue-400 text-white cursor-pointer"
        >+</button>
      </div>
        <p className="text-center text-white">${item.item.price * item.quantity}</p>
      </div>
    )
  }
  
  export default Cart