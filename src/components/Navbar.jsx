import { useState, useEffect } from "react";
import FormDrawer from "./FormDrawer";
import logo from "../assets/logo.png";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import profile from "../assets/image-avatar.jpg";
import "./../Index.css";

const Navbar = ({ isOpen, onClose, receiptData }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const themeIcon = theme === "dark" ? sun : moon;

  return (
    <div className="flex relative">
      {isOpen && (
        <FormDrawer
          isOpen={isOpen}
          onClose={onClose}
          receiptData={receiptData}
        />
      )}
      <div className="fixed h-full bg-sidebar rounded-t-3xl rounded-br-3xl">
        <div>
          <img src={logo} alt="app-logo" />
        </div>
        <div className="absolute bottom-32 w-full flex justify-center">
          <img
            src={themeIcon}
            alt="dark-mode"
            className="cursor-pointer p-1"
            onClick={toggleTheme}
          />
        </div>
        <div className="w-full h-px bg-slate-400 absolute bottom-24"></div>
        <div className="w-full flex justify-center absolute bottom-0 py-6">
          <img src={profile} alt="profile" className="rounded-full h-11" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
