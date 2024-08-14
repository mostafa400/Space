import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

function Layout() {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
