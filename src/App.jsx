import Footer from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
//import Navbar from "./components/Navbar.jsx" //importación por defecto
import { Navbar } from "./components/Navbar.jsx"; //importacion nombrada

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
