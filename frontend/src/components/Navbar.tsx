import {
  IoSunnyOutline,
  IoMoonOutline,
  IoBuildOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

import LogoButton from "./LogoButton";
import useTheme from "../hooks/useTheme";

const ThemeSelector = ({
  onThemeChange,
}: {
  onThemeChange: (value: string) => void;
}) => {
  return (
    <div className="absolute flex flex-col gap-2 right-0 mt-2 w-48 border bg-white dark:bg-black dark:border-gray-800 rounded-lg shadow-lg py-4 px-2">
      <p>Choose Theme:</p>
      <span
        onClick={() => onThemeChange("light")}
        className="flex items-center gap-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer px-2"
      >
        <IoSunnyOutline /> Light
      </span>
      <span
        onClick={() => onThemeChange("dark")}
        className="flex items-center gap-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer px-2"
      >
        <IoMoonOutline /> Dark
      </span>
      <span
        onClick={() => onThemeChange("system")}
        className="flex items-center gap-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer px-2"
      >
        <IoBuildOutline /> System
      </span>
    </div>
  );
};

const Navbar = () => {
  const [theme, setTheme] = useTheme();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const themeChanger = useCallback(
    (newTheme: string) => {
      setTheme(newTheme);
      setIsPopupVisible(false);
    },
    [setTheme]
  );

  const renderThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <IoMoonOutline />;
      case "light":
        return <IoSunnyOutline />;
      case "system":
        return <IoBuildOutline />;
    }
  };

  return (
    <header className="select-none w-full py-2 shadow-lg border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-[#09090b] dark:text-white">
      <nav className="w-11/12 mx-auto flex items-center justify-between px-10 rounded-lg">
        <Link to="/" className="font-semibold text-2xl">
          MyPovLife
        </Link>
        <div className="flex items-center gap-5">
          <div className="relative">
            <LogoButton onClick={() => setIsPopupVisible(!isPopupVisible)}>
              {renderThemeIcon()}
            </LogoButton>
            {isPopupVisible && <ThemeSelector onThemeChange={themeChanger} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
