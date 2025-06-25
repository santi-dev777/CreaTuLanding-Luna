import { useState, useRef } from "react";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function NavBar({ categories }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  return (
    <nav className="bg-blue-200 my-1 flex justify-between items-center py-3 px-10">
      <h2 className="text-2xl text-black cursor-pointer" onClick={() => navigate('/')} >E-commerce</h2>

      <div className="flex gap-5 items-center">
        <ul className="flex gap-5 items-center">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-gray-800 hover:text-black cursor-pointer flex items-center gap-1"
            >
              Categories
              {open ? <FaChevronUp className="self-center" /> : <FaChevronDown className="self-center" />}
            </button>

            {open && (
              <ul className="absolute bg-white shadow-md rounded-md mt-2 p-2 z-10 w-40">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 cursor-pointer capitalize"
                    onClick={() => {
                      navigate(`/category/${cat}`)
                      setOpen(false)
                    }}
                  >
                    {cat}
                  </li>
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

