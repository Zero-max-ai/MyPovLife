import { useRecoilValue } from "recoil";
import { search } from "../recoil/search";
import { filterTag } from "../recoil/filterTag";

import SearchComp from "./Search";
import FilterTags from "./FilterTags";
import AllImgsGen from "./AllImgsGen";
import SpecificImgGen from "./SpecificImgGen";

const Home = () => {
  const searchStatus = useRecoilValue(search);
  const filter = useRecoilValue(filterTag);

  return (
    <main className=" min-h-[100vh] max-w-screen w-7/12 max-md:w-9/12 mx-auto flex flex-col py-20 dark:text-white">
      <FilterTags />
      {searchStatus && <SearchComp />}
      <div className="w-full">
        <h1 className="font-semibold text-3xl">My Photography Gallery</h1>
      </div>
      <div className="w-full py-4 flex flex-col gap-3">
        <h1 className="font-extrathin text-xl max-md:text-base">
          Capturing moments from around the world
        </h1>
        {filter === "All Tags" ? <AllImgsGen /> : <SpecificImgGen />}
      </div>
    </main>
  );
};

export default Home;
