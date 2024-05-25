import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSetRecoilState } from "recoil";
import { search } from "../recoil/search";

const SearchComp = () => {
  const setSearchState = useSetRecoilState(search);
  return (
    <div className="absolute bg-white top-40 w-1/3 border rounded-lg py-2 px-4">
      {/* input box for serach */}
      <div className="flex items-center justify-between gap-2 border-b py-1">
        <div className="w-full flex items-center justify-center gap-2">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Type title"
            className="w-full py-1 px-4 rounded-lg outline-none"
          />
        </div>
        <div onClick={() => setSearchState(false)} className="cursor-pointer">
          <RxCross2 />
        </div>
      </div>

      {/* images titles as per the image name use image state for getting detials */}
    </div>
  );
};

export default SearchComp;
