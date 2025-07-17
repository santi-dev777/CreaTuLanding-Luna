import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import { getCategories } from "../../firebase/db"

function NavBarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(res => setCategories(res))
        
    }, [])

    return(
        <NavBar categories={categories} />
    )   
}

export default NavBarContainer