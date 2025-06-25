import { useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryName} = useParams()

    useEffect(() => {

        const url = categoryName ? 
            `https://fakestoreapi.com/products/category/${categoryName}` : 
            'https://fakestoreapi.com/products'
        fetch(url)
          .then(res => res.json())
          .then(res =>setItems(res))
    }, [categoryName])

    return (
        <div className="flex flex-col items-center pt-5 gap-3">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer