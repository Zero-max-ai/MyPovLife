import ImgCard from "./ImgCard";

import { ImgCardProps } from "../components/ImgCard";
import { allImagesSelector } from "../recoil/allImages";
import { useRecoilValue } from "recoil";

const AllImgsGen = () => {
  const images = useRecoilValue(allImagesSelector);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map(
        ({ id, title, link, format, height, width, tags }: ImgCardProps) => (
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
  );
};

export default AllImgsGen;
