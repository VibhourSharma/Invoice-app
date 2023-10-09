import logo from "../../public/assets/logo.png";
import moon from "../../public/assets/icon-moon.svg";
import profile from "../../public/assets/image-avatar.jpg";
import "./../Index.css";

const Header = () => {
  return (
    <div className="flex relative">
      <div className="fixed h-full bg-sidebar rounded-t-3xl rounded-br-3xl">
        <div>
          <img src={logo} alt="app-logo" />
        </div>
        <div className="absolute bottom-32 w-full flex justify-center">
          <img src={moon} alt="dark-mode" className="cursor-pointer p-1" />
        </div>
        <div className="w-full h-px bg-slate-400 absolute bottom-24"></div>
        <div className="w-full flex justify-center absolute bottom-0 py-6">
          <img src={profile} alt="profile" className="rounded-full h-11" />
        </div>
      </div>
    </div>
  );
};

export default Header;
