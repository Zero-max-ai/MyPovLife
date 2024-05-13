import { Link } from "react-router-dom";
import Icon from "./Icon";
import ThemeButton from "./ThemeButton";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/Designer (11).png";

const Navbar = () => {
  return (
    <header className="fixed z-50 top-0 left-0 bg-[#09090b] w-full py-3 border-b-[#1f2937] border-b-2">
      <nav className="flex justify-between w-11/12 max-md:w-full px-4 mx-auto">
        <Link to={"/"} className="text-xl text-white">
          <span>MyPovLife</span>
          {/* <img src={Logo} alt="" className=" w-8 rounded-sm" /> */}
        </Link>
        <div className="text-white flex items-center  gap-5 select-none">
          <Icon padding={true}>
            <span>
              <IoSearchOutline />
            </span>
            <span className="font-thin">Search...</span>
            <span className="bg-[#292c35] group-hover:bg-[#404955] px-1 rounded-sm font-thin text-xs">
              Ctrl K
            </span>
          </Icon>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
