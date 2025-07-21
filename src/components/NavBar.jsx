import { useState, useRef } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function NavBar({ categories }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [name, setName] = useState("Categories")

  return (
    <nav className="bg-blue-900 my-1 flex justify-between items-center py-3 px-10">
      <NavLink to="/" className="text-2xl text-white cursor-pointer" onClick={() => {setOpen(false) ,setName("Categories")}}>E-commerce</NavLink>

      <div className="flex gap-5 items-center">
        <ul className="flex gap-5 items-center">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-white hover:text-white cursor-pointer flex items-center gap-1"
            >
              {name}
              {open ? <FaChevronUp className="self-center" /> : <FaChevronDown className="self-center" />}
            </button>

            {open && (
              <ul className="absolute bg-gray-900 shadow-md rounded-md mt-2 p-2 z-10 w-40">
                {categories.map((cat) => (
                  <NavLink
                  key={cat.id}
                  to={`/category/${cat.name}`}
                  onClick={() => {setOpen(false) 
                                setName(cat.name)}}
                  className="block px-4 py-2 text-white hover:text-white hover:bg-gray-800 capitalize"
                >
                  {cat.name}
                </NavLink>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;

