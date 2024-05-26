import Caption from "./Caption";
import DownloadBtn from "./DownloadBtn";

export interface ImgCardProps {
  id: string;
  title: string;
  link: string;
  height: number;
  width: number;
  format: string;
  tags: string;
}

const ImgCard = ({
  id,
  title,
  link,
  format,
  height,
  width,
  tags,
}: ImgCardProps) => {
  return (
    <div className="max-w-sm bg-white dark:bg-transparent border border-gray-300 dark:border-gray-800 rounded-lg shadow select-none group relative">
      <div key={id} className="w-full h-64 flex items-center justify-center">
        <img
          src={link}
          alt={`Image ${title + "." + format}`}
          className="object-cover h-full w-full rounded-t-md"
        />
      </div>
      <DownloadBtn />

      <div className="px-5 py-2">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="">
          <Caption cap={tags} />
          <Caption cap={width + "x" + height} />
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
