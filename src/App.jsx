import NavBarContainer from "./components/NavBar/NavBarContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
