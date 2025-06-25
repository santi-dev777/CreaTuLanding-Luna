import { useState, useEffect } from "react"
import NavBar from "./NavBar"

function NavBarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(res => setCategories(res))
            .catch(err => console.log(err))

    }, [])

    return(
        <NavBar categories={categories} />
    )   
}

export default NavBarContainer