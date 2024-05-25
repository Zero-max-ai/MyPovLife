import { tagDetails } from "../utils/index";
import { useRecoilState } from "recoil";
import { filterTag } from "../recoil/filterTag";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const FilterTags = () => {
  const [filter, setFilter] = useRecoilState(filterTag);
  const [popup, setPopup] = useState(false);

  return (
    <div className="w-full py-10 dark:text-white flex flex-col gap-5 select-none">
      <h1 className="flex flex-col items-center justify-center text-3xl font-bold">
        Filter Tags
      </h1>

      {/* tag/filter selector */}
      <div className="w-1/2 mx-auto border dark:border-gray-800 rounded-lg p-2 flex flex-col gap-3 max-md:hidden justify-between shadow-lg">
        <div
          onClick={() => setPopup(!popup)}
          className="w-full border-b dark:border-gray-900 cursor-pointer"
        >
          <span className="flex items-center justify-between">
            {filter ? filter : "Choose a tag"}
            {popup ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {popup && (
          <div className="w-full flex flex-col gap-2">
            {tagDetails.map((val) => {
              return (
                <span
                  key={val}
                  onClick={() => {
                    setFilter(val);
                    setPopup(!popup);
                  }}
                  className="w-full px-2 rounded cursor-pointer hover:bg-slate-100 dark:hover:bg-[#1e293b]"
                >
                  {val}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTags;
