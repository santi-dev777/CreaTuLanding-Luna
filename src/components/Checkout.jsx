import { useState } from "react";
import { useCart } from "../context/useCart";
import {serverTimestamp} from "firebase/firestore"
import {createOrder} from "../firebase/db"
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router"

function Checkout() {
  const {cart, getTotal, clearCart} = useCart()
  const navigate = useNavigate()
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

    const order = {
        user: {...form},
        items: cart,
        total: getTotal() + 5,
        date: serverTimestamp(),
      }

    const create = async (order) => {
      const id = await createOrder(order);
      clearCart();
      setForm({ email: "", name: "", phone: "" })
      navigate("/");
      return id;  
    };
    
    toast.promise(
      create(order), {
        loading: "Creating order...",
        success: (orderId) => `Order created successfully. Your order ID is: ${orderId}`,
        error: "Failed to create order",
      });

   
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded shadow bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center ">
        Checkout
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1 ">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            placeholder="Enter your name"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
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
