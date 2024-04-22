import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
