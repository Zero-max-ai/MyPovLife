import useImgFilter from "../hooks/useImageFilter";
import ImgCard from "./ImgCard";
import { ImgCardProps } from "../components/ImgCard";

const SpecificImgGen = () => {
  const { currImg, data } = useImgFilter();

  return (
    <div className="w-full">
      {currImg.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currImg.map(
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
      ) : (
        <div className="">
          <h1 className="dark:text-white">{data}</h1>
        </div>
      )}
    </div>
  );
};

export default SpecificImgGen;
