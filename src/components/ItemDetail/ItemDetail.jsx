import { useContext } from "react";
import CounterContainer from "../Counter/CounterContainer"
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";


function ItemDetail({product}) {
    const { addToCart } = useContext(CartContext)

    return (
        <div className="flex justify-center gap-10 border border-gray-300 mt-10 p-3">
            <img className="max-h-[450px] object-cover self-center" src={product.image} alt="" />
            <div className="flex flex-col items-center max-w-[500px] gap-3 mt-10">
                <h1 className="text-2xl text-gray-600">{product.name}</h1>
                <p 
                    className="flex items-center gap-1 text-gray-600 self-start">
                    {product.rate} 
                    <FaStar className="text-yellow-200" /> 
                </p>
                <p className="text-gray-600 self-start font-bold text-3xl">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex gap-2 mt-4 items-center">
                    <CounterContainer product={product} />
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail
