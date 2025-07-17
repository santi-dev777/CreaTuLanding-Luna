import { useState } from "react";
import { useCart } from "../../context/useCart";
import {serverTimestamp} from "firebase/firestore"
import {createOrder} from "../../firebase/db"

function Checkout() {
  const {cart, getTotal} = useCart()
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)

    const order = {
        user: {...form},
        items: cart,
        total: getTotal() + 5,
        date: serverTimestamp(),
      }

    createOrder(order)
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Checkout
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-600 mb-1 ">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            placeholder="Enter your name"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            placeholder="Enter your phone number"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Finalize Purchase
        </button>
      </form>
    </div>
  );
}

export default Checkout;
