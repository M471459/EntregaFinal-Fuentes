import { Layout } from "./components/layout/Layout.jsx";
import ItemListContainer from "./components/pages/Home/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import NotFoundContainer from "./components/pages/NotFound/NotFoundContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/deportes/:sport" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<NotFoundContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Layout>
    //     <ItemListContainer saludo={"Hola, esta es mi tienda"} />
    //   </Layout>
    // </div>
  );
}

export default App;
