import { useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import {getItems, getItemsByCategory} from "../../firebase/db"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryName} = useParams()
    
    useEffect(() => {
        categoryName ? 
            getItemsByCategory(categoryName).then(res => setItems(res)) : 
            getItems().then(res => setItems(res))
    }, [categoryName])

    return (
        <div className="flex flex-col items-center pt-5 gap-3">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer