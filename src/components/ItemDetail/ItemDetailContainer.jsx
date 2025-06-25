import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const {id} = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [id])
    return (
        <div className="max-w-[1000px] mx-auto">
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <h1 className="text-2xl text-gray-600 flex items-center justify-center">Loading...</h1>
            )}
        </div>
    )
}

export default ItemDetailContainer