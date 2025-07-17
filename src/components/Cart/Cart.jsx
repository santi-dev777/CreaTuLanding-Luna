function Cart({ item }) {
    return (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b pb-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={item.item.image}
            alt={item.item.title}
            className="w-16 h-16 object-contain"
          />
          <div>
            <p className="text-gray-600 font-semibold">{item.item.name}</p>
            
          </div>
        </div>
        <p className="text-center text-gray-600">${item.item.price}</p>
        <p className="text-center text-gray-600">{item.quantity}</p>
        <p className="text-center text-gray-600">${item.item.price * item.quantity}</p>
      </div>
    )
  }
  
  export default Cart
  