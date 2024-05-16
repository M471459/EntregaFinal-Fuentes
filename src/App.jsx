import { Layout } from "./components/layout/Layout.jsx";
import ItemListContainer from "./components/pages/Home/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import NotFoundContainer from "./components/pages/NotFound/NotFoundContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import { Checkout } from "./components/pages/checkout/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/deportes/:sport" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<NotFoundContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
