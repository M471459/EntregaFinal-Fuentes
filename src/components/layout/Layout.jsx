import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 150px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
