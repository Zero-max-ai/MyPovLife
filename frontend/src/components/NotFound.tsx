import { Link } from "react-router-dom";
import NotFound404 from "../assets/NotFoundImg.png";

const NotFound = () => {
  return (
    <div className="h-screen max-w-screen dark:text-white">
      <div className="h-full w-9/12 max-sm:w-11/12 mx-auto flex max-sm:flex-col-reverse items-center justify-center">
        <div className="flex flex-col justify-center gap-2 text-xl">
          <h1 className="text-5xl text-extrabold">404</h1>
          <span className="text-extrathin text-xl">
            Sorry we couldn't find this page.
          </span>
          <span className="text-medium text-sm">
            But dont worry, you can find plenty of other things on our homepage.
          </span>
          <Link
            to={"/"}
            className="w-fit px-3 py-1 text-sm text-bold text-white bg-blue-400 cursor-pointer rounded-lg"
          >
            back to homepage
          </Link>
        </div>
        <img src={NotFound404} alt="" className="w-96" />
      </div>
    </div>
  );
};

export default NotFound;
