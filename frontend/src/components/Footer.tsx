import { SiAsciidoctor } from "react-icons/si";
import {
  FaLinkedinIn,
  FaSquareGithub,
  FaBlog,
  FaInstagram,
} from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import Logo from '../assets/Designer (111).png'

import LinkWithIcon from "./LinkWithIcon";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] w-full py-10 text-white">
      <div className="flex justify-between w-9/12 max-md:w-10/12 max-sm:w-11/12 mx-auto">
        <div className="">
          <img src={Logo} alt="" className=" w-40 rounded-full" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-xl">Quick Links</h1>
          <div className="flex flex-col gap-1">
            <LinkWithIcon
              icon={<SiAsciidoctor />}
              title={"Creator - Akshat Gangi"}
              loc={""} // my portfolio link addition
            />
            <LinkWithIcon
              icon={<FaLinkedinIn />}
              title={"LinkedIn"}
              loc={"https://www.linkedin.com/in/akshat-gangi-b457a61ab/"}
            />
            <LinkWithIcon
              icon={<FaSquareGithub />}
              title={"Github"}
              loc={"https://github.com/Zero-max-ai"}
            />
            <LinkWithIcon icon={<FaBlog />} title={"Blogs"} loc={""} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-xl">Follow Me On -</h1>
          <div className="flex flex-col gap-1">
            <LinkWithIcon icon={<FaInstagram />} title={"Instgram"} loc={""} />
            {/* addition of the instagram account */}
            <LinkWithIcon
              icon={<SiYoutubeshorts />}
              title={"Youtube"}
              loc={""}
            />
            {/* addition of the youtube short account */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
