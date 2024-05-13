import { ReactElement } from "react";
import { Link } from "react-router-dom";

type IconProps = {
  icon: ReactElement;
  title: string;
  loc: string;
};

const LinkWithIcon = ({ icon, title, loc }: IconProps) => {
  return (
    <Link to={loc} className="flex items-center gap-2 font-extrathin">
      <span className="text-lg">{icon}</span>
      {title}
    </Link>
  );
};

export default LinkWithIcon;
