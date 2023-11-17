import logo from "../assets/logo.png";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import profile from "../assets/image-avatar.jpg";
import "./../Index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InvoiceFormDrawer from "../components/InvoiceFormDrawer";
import Backdrop from "./Backdrop";

const Navbar = ({ isOpen, onClose }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex relative">
      <InvoiceFormDrawer isOpen={isOpen} onClose={onClose} />
      <Link>
        <div className="fixed h-full bg-sidebar rounded-t-3xl rounded-br-3xl">
          <div>
            <img src={logo} alt="app-logo" />
          </div>
          <div className="absolute bottom-32 w-full flex justify-center">
            <img
              src={theme === "dark" ? sun : moon}
              alt="dark-mode"
              className="cursor-pointer p-1"
              onClick={handleTheme}
            />
          </div>
          <div className="w-full h-px bg-slate-400 absolute bottom-24"></div>
          <div className="w-full flex justify-center absolute bottom-0 py-6">
            <img src={profile} alt="profile" className="rounded-full h-11" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
