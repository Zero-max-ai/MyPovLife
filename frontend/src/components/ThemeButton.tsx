import { useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

const ThemeButton = () => {
  const [theme, setTheme] = useState(false);
  const [popup, setPopup] = useState(false)
  return (
    <div className="flex items-center gap-2 bg-[#030712] hover:bg-[#1f2937] border border-[#1f2937] w-fit rounded-md cursor-pointer text-sm group duration-100 p-2" onClick={() => setPopup(!popup)}>
      {theme ? <RxSun /> : <RxMoon />}
      {popup && (
        <div className="absolute top-14 right-4 max-md:right-2 flex flex-col gap-1 bg-[#030712] w-32 px-1 py-3 rounded-md">
            <span className="hover:bg-[#1f2937] px-2 py-1 rounded-md" onClick={() => setTheme(true)}>Light</span>
            <span className="hover:bg-[#1f2937] px-2 py-1 rounded-md" onClick={() => setTheme(false)}>Dark</span>
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
