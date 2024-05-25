import { Link } from "react-router-dom";
import { socialContactDetails } from "../utils";
import Logo from "../assets/Designer (1).png";

const Footer = () => {
  return (
    <footer className="border-t bg-white border-gray-300 dark:text-white dark:bg-black dark:border-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10 rounded-lg" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              MyPovLife
            </span>
          </Link>
          <div className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium sm:mb-0">
            {socialContactDetails.map(({ title, renderer }) => {
              return (
                <Link key={title} to={renderer} className="hover:underline">
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          &copy; 2024{" "}
          <a href={"/"} className="hover:underline">
            MyPovLife - Akshat Gangi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
