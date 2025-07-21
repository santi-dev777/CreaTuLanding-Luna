import CounterContainer from "./CounterContainer"
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/useCart";


function ItemDetail({product}) {
    const { addToCart } = useCart()

    return (
        <div className="flex justify-center gap-10 border border-gray-300 mt-10 p-3">
            <img className="max-h-[450px] object-cover self-center" src={product.image} alt="" />
            <div className="flex flex-col items-center max-w-[500px] gap-3 mt-10">
                <h1 className="text-2xl text-white">{product.name}</h1>
                <p 
                    className="flex items-center gap-1 text-white self-start">
                    {product.rate} 
                    <FaStar className="text-yellow-200" /> 
                </p>
                <p className="text-white self-start font-bold text-3xl">${product.price}</p>
                <p className="text-white">{product.description}</p>
                <div className="flex gap-2 mt-4 items-center">
                    <CounterContainer product={product} />
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail
