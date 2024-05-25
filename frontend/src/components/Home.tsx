import { useRecoilValue } from "recoil";
import { allImagesSelector } from "../recoil/allImages";
import { search } from "../recoil/search";
import { ImgCardProps } from "../components/ImgCard";

import SearchComp from "./Search";
import ImgCard from "./ImgCard";
import FilterTags from "./FilterTags";

const Home = () => {
  const searchStatus = useRecoilValue(search);
  const images = useRecoilValue(allImagesSelector);

  return (
    <main className="max-w-screen w-7/12 mx-auto flex flex-col items-center justify-center pb-10 dark:text-white">
      <FilterTags />
      {searchStatus && <SearchComp />}
      <div className="w-full">
        <h1 className="font-semibold text-3xl">My Photography Gallery</h1>
      </div>
      <div className="w-full py-4 flex flex-col gap-3">
        <h1 className="font-extrathin text-xl">
          Capturing moments from around the world
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(
            ({
              id,
              title,
              link,
              format,
              height,
              width,
              tags,
            }: ImgCardProps) => (
              <ImgCard
                key={id}
                id={id}
                title={title}
                link={link}
                format={format}
                height={height}
                width={width}
                tags={tags}
              />
            )
          )}
        </div>
      </div>

      {/* <div className="flex flex-col gap-3 w-full">
        {tagImages.map(({ images, tag }: tagImgProp) => {
          return (
            <FeatureCard
              key={tag}
              heading={tag}
              renderer={`/specific/${tag}`}
              imgs={images}
            />
          );
        })}
      </div> */}
    </main>
  );
};

export default Home;
