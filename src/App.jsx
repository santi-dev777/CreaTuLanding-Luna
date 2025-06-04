import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <ItemListContainer text="Products List, empty for now :c" />
    </div>
  )
}

export default App
