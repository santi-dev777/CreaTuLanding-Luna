import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="bg-gray-300 my-3 flex justify-between items-center py-3 px-10 rounded-3xl">
            <h2 className="text-2xl text-black">E-commerce</h2>
            <div className="flex gap-5">
                <ul className="flex gap-5">
                    <li className="text-gray-600 hover:text-black cursor-pointer">Supplements</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Training</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Equipment</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar