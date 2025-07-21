import NavBarContainer from "./components/NavBarContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import CartContainer from "./components/CartContainer";
import CheckOut from "./components/Checkout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <div>
        <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
