import { useNavigate } from "react-router"
import { FaStar } from "react-icons/fa";


function Item({product}) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-2 border border-gray-200 max-w-[550px] max-h-[550px] p-6 items-start justify-center">
            <img src={product.image} alt="" className="max-h-[200px] object-cover self-center" />
            <div className="flex flex-col gap-2 max-w-[200px] self-center">
                <h2 className="text-gray-600">{product.title}</h2>
                <div className="flex items-center justify-between gap-1">
                    <p className="text-gray-600">${product.price}</p>
                    <p className="flex items-center gap-1 text-gray-600">{product.rating.rate} <FaStar className="text-yellow-200" /></p>
                </div>
                <div className="flex justify-center ">
                    <button 
                        className="bg-blue-300 px-2 py-1 rounded hover:bg-blue-400 cursor-pointer max-w-[150px] self-center" 
                        onClick={() => navigate(`/item/${product.id}`)}>
                            View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item