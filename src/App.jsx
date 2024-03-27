import Navbar from "./components/layout/Navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/Home/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Hola, esta es mi tienda"} />
    </div>
  );
}

export default App;
