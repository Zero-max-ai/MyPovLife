import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";

export interface FeatureCardProps {
  heading: string;
  renderer: string;
  imgs: string[];
}

const FeatureCard = ({ heading, renderer, imgs }: FeatureCardProps) => {
  return (
    <div className="w-full py-4 shadow-lg rounded-lg border border-gray-800 px-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{heading}</h1>
        <Link
          to={renderer}
          className="flex items-center text-blue-500 underline underline-offset-2"
        >
          <span>see more</span>
          <span>
            <IoIosLink />
          </span>
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
        {imgs.map(({ id, link, title, format }: any) => {
          return (
            <div key={id} className="">
              <img src={link} alt={title + "." + format} />
            </div>
          );
        })}
        {imgs.map(({ id, link, title, format }: any) => {
          return (
            <div key={id} className="">
              <img src={link} alt={title + "." + format} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCard;
